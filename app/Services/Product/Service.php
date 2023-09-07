<?php

namespace App\Services\Product;

use App\Models\Product;
use Illuminate\Support\Facades\DB;

class Service
{
    public function update(array $data, Product $product): Product|string
    {
        try {
            DB::beginTransaction();

            $product->update($data); // Use the update method on the $product instance

            DB::commit();
        } catch (\Exception $exception) {
            DB::rollBack();
            return $exception->getMessage();
        }
        return $product;

    }

    public function store(array $data): Product|string
    {
        try {
            DB::beginTransaction();

            $product = Product::firstOrCreate($data);

            DB::commit();
        } catch (\Exception $exception) {
            DB::rollBack();
            return $exception->getMessage();
        }
        return $product;
    }


}
