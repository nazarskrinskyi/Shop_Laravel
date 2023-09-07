<?php

namespace App\Http\Controllers\Admin\User;

use App\Http\Filters\UserFilter;
use App\Http\Requests\Admin\User\FilterRequest;
use App\Models\User;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class IndexController extends BaseController
{

    /**
     * @throws BindingResolutionException
     */
    public function __invoke(): View|RedirectResponse
    {
        $users = User::paginate(10);

        if (isset($_GET['page'])) {
            if ($_GET['page'] < 1 || $_GET['page'] > $users->lastPage()) {
                return redirect(explode('?', $_SERVER['REQUEST_URI'])[0] . "?page=1");
            }
        }

        return view('admin.user.index', compact('users'));
    }
}
