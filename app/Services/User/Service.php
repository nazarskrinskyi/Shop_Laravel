<?php

namespace App\Services\User;

use App\Models\User;
use Illuminate\Support\Facades\DB;

class Service
{
    public function update(array $data, User $user): User|string
    {
        try {
            DB::beginTransaction();
            $user->update($data);

            DB::commit();
        } catch (\Exception $exception) {
            DB::rollBack();
            return $exception->getMessage();
        }
        return $user;

    }

    public function store(array $data): User|string
    {
        try {
            DB::beginTransaction();

            $user = User::firstOrCreate([
                'email' => $data['email']
            ],$data);

            DB::commit();
        } catch (\Exception $exception) {
            DB::rollBack();
            return $exception->getMessage();
        }
        return $user;
    }


}
