<?php

namespace App\Http\Requests\Api\Product;

use Illuminate\Foundation\Http\FormRequest;

class IndexRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'categories' => 'nullable|array',
            'colors' => 'nullable|array',
            'prices' => 'nullable|array',
            'discount_prices' => 'nullable|array',
            'tags' => 'nullable|array',
            'page' => 'nullable|integer',
            'id' => 'nullable|array',
        ];
    }
}
