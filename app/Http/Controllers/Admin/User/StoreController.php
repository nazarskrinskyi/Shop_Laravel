<?php

namespace App\Http\Controllers\Admin\User;

use App\Http\Requests\User\StoreRequest;
use Illuminate\Http\RedirectResponse;

class StoreController extends BaseController
{
    public function __invoke(StoreRequest $request): RedirectResponse
    {
        $data = $request->validated();
        $user = $this->service->store($data);
        return redirect()->route('admin.user.index');
    }
}
