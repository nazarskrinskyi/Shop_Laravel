<?php

namespace App\Http\Controllers\Admin\Color;

use App\Models\Color;

class ShowController extends BaseController
{
    public function __invoke(Color $color)
    {

        return view('admin.color.show', compact('color'));
    }
}
