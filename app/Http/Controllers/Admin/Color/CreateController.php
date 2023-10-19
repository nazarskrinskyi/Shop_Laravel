<?php

namespace App\Http\Controllers\Admin\Color;

use Illuminate\View\View;

class CreateController extends BaseController
{
    public function __invoke(): View
    {

        return view('admin.color.create');
    }
}
