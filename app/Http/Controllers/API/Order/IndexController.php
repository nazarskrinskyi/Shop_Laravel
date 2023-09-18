<?php

namespace App\Http\Controllers\API\Order;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Order\IndexRequest;
use App\Http\Resources\Order\OrderResource;

use App\Models\Order;
use App\Models\User;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Support\Facades\Hash;

class IndexController extends Controller
{

    /**
     * @throws BindingResolutionException
     */
    public function __invoke(IndexRequest $request)
    {
        $data = $request->validated();
        $user = User::firstOrCreate(
            [
                'email' => $data['email']
            ],
            [
                'name' => $data['name'],
                'address' => $data['address'],
                'password' => Hash::make('nazar2004')
            ]);

        $order = Order::create(
            [
                'products' => json_encode($data['products']),
                'user_id' => $user->id,
                'total_price' => $data['total_price'],
                'payment_status' => 1,
            ]);
        return new OrderResource($order);
    }
}
