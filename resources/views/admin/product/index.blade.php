@extends('layouts.admin')
@section('content')

    <div class="p-2">
        <div class="text-right">
        <a class="btn btn-primary mb-3" href="{{ route('admin.product.create') }}">Create Product</a>
        </div>

        <table class="table" style="border: 2px solid #1b1e21">
            <thead>
            <tr class="text-center col-12" style="border: 4px solid #1b1e21">
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Content</th>
                <th scope="col">Category</th>
                <th scope="col">Tags</th>
                <th scope="col">Colors</th>
                <th scope="col">Pre-Image</th>
                <th scope="col">Hover-Image</th>
                <th scope="col">Price</th>
                <th scope="col">Discount Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Is_Published</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            @foreach($products as $product)
                <tr style="border: 2px solid darkgrey">
                    <th class="text-center" scope="row">{{ $product->id }}</th>
                    <td class="text-center"><a
                            href="{{ route('admin.product.show', $product->id) }}">{{ $product->title }}</a></td>
                    <td class="text-center">
                        @if($product->description)
                            <div class="textContainer">
                                <p class="displayText">
                                    {{ $product->description }}
                                </p>
                                <button class="toggleButton btn-primary btn-sm">Show-more</button>
                            </div>
                        @else
                            {{ "NaN" }}
                        @endif
                    </td>
                    <td class="text-center">
                        <div class="textContainer">
                            <p class="displayText">
                                {{ $product->content }}
                            </p>
                            <button class="toggleButton btn-primary btn-sm">Show-more</button>
                        </div>
                    </td>
                    <td class="text-center">{{ $product->category->title }}</td>
                    <td>
                        <div>
                            @foreach($product->tags as $tag)
                                <a href="{{ route("admin.tag.show",$tag->id) }}"><span
                                        class="tag">{{ $tag->title }}</span></a>
                            @endforeach
                        </div>
                    </td>
                    <td class="text-center tags-cell">
                        <div>
                            @foreach($product->colors as $color)
                                <a href="{{ route("admin.color.show", $color->id) }}">
                                    <div
                                        style="width: 20px; height: 20px; background: {{ '#' . $color->title }}; display: inline-block; vertical-align: middle;">
                                        <!-- Your content here --></div>
                            @endforeach
                        </div>
                    </td>
                    <td class="text-center">
                        <div class="textContainer">
                            <p class="displayText">
                                {{ $product->preview_image }}
                            </p>
                            <button class="toggleButton btn-primary btn-sm">Show-more</button>
                        </div>
                    </td>
                    <td class="text-center">
                        <div class="textContainer">
                            <p class="displayText">
                                {{ $product->hover_image }}
                            </p>
                            <button class="toggleButton btn-primary btn-sm">Show-more</button>
                        </div>
                    </td>
                    <td class="text-center">{{ $product->price }}</td>
                    <td class="text-center">{{ $product->discount_price ?? 'NaN'}}</td>
                    <td class="text-center">{{ $product->quantity }}</td>
                    <td class="text-center">{{ $product->is_published ? 'Yes' : 'No' }}</td>
                    <td class="text-center">
                        <a href="{{ route('admin.product.edit', $product->id) }}"
                           class="btn btn-sm btn-outline-primary">Edit</a>
                        <form method="POST" action="{{ route('admin.product.delete', $product->id) }}"
                              class="d-inline-block">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-sm btn-outline-danger"
                                    onclick="return confirm('Are you sure?')">Delete
                            </button>
                        </form>
                    </td>
                </tr>

            @endforeach

            </tbody>
        </table>

    </div>

    <!-- Display the pagination links -->
    @if($products->lastPage() > 1 && isset($_GET['page']))
        <div class="pagination justify-content-center">
            <nav aria-label="Page navigation ">
                <ul class="pagination">
                    @if($_GET['page'] > 1)
                        <li class="page-item">
                            <a class="page-link"
                               href="{{ isset($_GET['tags']) ? "?tags=$_GET[tags]&page=".$_GET['page']-1 : '?page='.$_GET['page']-1 }}"
                               aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>
                    @endif

                    @for($i = 1;$i <= $products->lastPage();$i++)
                        <li class="page-item"><a class="page-link"
                                                 href="{{ isset($_GET['tags']) ? "?tags=$_GET[tags]&page=".$i : '?page='.$i }}">{{ $i }}</a>
                        </li>
                    @endfor

                    @if($products->lastPage() > $_GET['page'])
                        <li class="page-item">
                            <a class="page-link"
                               href="{{ isset($_GET['tags']) ? "?tags=$_GET[tags]&page=".$_GET['page']+1 : '?page='.$_GET['page']+1 }}"
                               aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                            </a>
                        </li>
                    @endif
                </ul>
            </nav>
        </div>
    @endif

@endsection
