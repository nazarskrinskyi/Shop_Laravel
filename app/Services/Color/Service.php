<?php

namespace App\Services\Color;

use App\Models\Category;
use App\Models\Color;
use Illuminate\Support\Facades\DB;

class Service
{
    public function update(array $data, Color $color): Color|string
    {
        try {
            DB::beginTransaction();

            $color->update($data); // Use the update method on the $category instance

            DB::commit();
        } catch (\Exception $exception) {
            DB::rollBack();
            return $exception->getMessage();
        }
        return $color;

    }

    public function store(array $data): Color|string
    {
        try {
            DB::beginTransaction();

            $color = Color::firstOrCreate($data);

            DB::commit();
        } catch (\Exception $exception) {
            DB::rollBack();
            return $exception->getMessage();
        }
        return $color;
    }


}
