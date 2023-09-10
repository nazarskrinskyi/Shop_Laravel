<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
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
            'title' => 'required|string',
            'description' => "nullable|string",
            'content' => 'required|string',
            'preview_image' => 'nullable|image',
            'hover_image' => 'nullable|image',
            'price' => 'required|integer',
            'discount_price' => 'nullable|integer',
            'quantity' => 'required|integer',
            'category_id' => 'required|exists:categories,id',
            'is_published' => 'nullable',
            'tags' => 'nullable|array',
            'colors' => 'nullable|array',
        ];
    }
}
