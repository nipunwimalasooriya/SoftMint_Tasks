<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\FormSubmission;
use Illuminate\Support\Facades\Mail;

class FormController extends Controller
{
    public function showForm()
    {
        return view('form');
    }

    public function submitForm(Request $request)
    {
        // Validate the form inputs
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
            'photo' => 'required|image|max:2048',
        ]);

        // Prepare the data
        $data = $request->only('name', 'email', 'message');
        $data['photo'] = $request->file('photo')->store('photos', 'public');

        // Send the email
        Mail::to('recipient@example.com')->send(new FormSubmission($data));

        // Redirect back with success message
        return back()->with('success', 'Form submitted successfully!');
    }
}
