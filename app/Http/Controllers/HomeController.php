<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    //
    public function index() {        
        return view('pages.home', [
            'page_title' => 'THIS IS HOME',
            'page_description' => 'description home',
            'body_class' => 'home'
        ]);
    }
}
