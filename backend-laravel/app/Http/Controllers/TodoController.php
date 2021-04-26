<?php

namespace App\Http\Controllers;

use App\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{

    public function index(){
        return Todo::all(); 
    }

    public function store(Request $request){
        $data = $request->all(); 
        $todo = new Todo; 
        $todo->description = $data["description"];
        $todo->checked = $data["checked"]; 
        $todo->save();  
        return $todo; 

    }

    public function update(Request $request, $id){
        $request = $request->all(); 
        $todo = Todo::find($id); 
        $todo->description = $request['description']; 
        $todo->checked = $request['checked']; 
        $todo->save(); 
    }
    
    public function destroy($id){
        return Todo::destroy($id); 
    }
}
