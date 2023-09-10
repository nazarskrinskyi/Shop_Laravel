@extends('layouts.admin')

@section('content')

    <div>
        <h1 class="text-center">{{ $product->name }}</h1>
        <div class="text-right">
        <a class="btn btn-warning mb-3" href="{{ route('admin.product.edit', $product->id) }}">Edit</a>
        <form method="POST" action="{{ route('admin.product.delete', $product->id) }}"
              class="d-inline-block">
            @csrf
            @method('DELETE')
            <button type="submit" class="btn btn-danger mb-3"
                    onclick="return confirm('Are you sure?')">Delete
            </button>
        </form>
        </div>
        <table class="table">
            <tbody>
            <tr class="col">
                <th scope="col">ID</th>
                <td class="text-center">{{ $product->id }}</td>
            </tr>
            <tr>
                <th scope="col">Title</th>
                <td class="text-center">{{ $product->title }}</td>
            </tr>
            <tr>
                <th scope="col">Description</th>
                <td class="text-center">{{ $product->description }}</td>

            </tr>
            <tr>
                <th scope="col">Content</th>
                <td>{!! $product->content !!}</td>

            </tr>
            <tr>
                <th scope="col">Price</th>
                <td class="text-center">{{ $product->price }}</td>
            </tr>
            <tr>
                <th scope="col">Discount Price</th>
                <td class="text-center">{{ $product->discount_price ?? 'NaN' }}</td>
            </tr>
            <tr>
                <th scope="col">Quantity</th>
                <td class="text-center">{{ $product->quantity }}</td>
            </tr>
            <tr>
                <th scope="col">Category</th>
                <td class="text-center">{{ $product->category->title }}</td>

            </tr>

            <tr>
                <th scope="col">Tags</th>
                <td class="text-center">
                    @foreach($product->tags as $tag)
                        <a href="{{ route("admin.tag.show",$tag->id) }}"><span
                                class="tag">{{ $tag->title }}</span></a>
                    @endforeach
                </td>

            </tr>
            <tr>
                <th scope="col">Colors</th>
                <td class="text-center">
                    @foreach($product->colors as $color)
                        <a href="{{ route("admin.color.show", $color->id) }}">
                            <div
                                style="width: 20px; height: 20px; background: {{ '#' . $color->title }}; display: inline-block; vertical-align: middle;">
                            </div>
                    @endforeach
                </td>
            </tr>
            <tr>
                <th scope="col">Preview Image</th>
                <td class="text-center">{{ $product->preview_image }}
                    <div class="mt-2 text-center">
                        <img src="{{ asset('storage/' . $product->preview_image) }}" class="img-fluid"
                             alt="{{ "No Image" }}">
                        @if(!$product->preview_image)
                            <a href="{{ route('admin.product.edit', $product->id) }}">Set here</a>
                        @endif
                    </div>

                </td>
            </tr>
            <tr>
                <th scope="col">Hover Image</th>
                <td class="text-center">{{ $product->hover_image }}
                    <div class="mt-2 text-center">
                        <img src="{{ asset('storage/' . $product->hover_image) }}" class="img-fluid"
                             alt="{{ "No Image" }}">
                        @if(!$product->hover_image)
                            <a href="{{ route('admin.product.edit', $product->id) }}">Set here</a>
                        @endif
                    </div>

                </td>
            </tr>
            <tr>
                <th scope="col">Is Published</th>
                <td class="text-center">{{ $product->is_published ? 'Yes' : 'No' }}</td>
            </tr>

            </tbody>
        </table>

    </div>
@endsection
