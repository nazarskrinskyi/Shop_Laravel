@extends('layouts.admin')
@section('content')

    <div class="p-2">
        <a class="btn btn-primary mb-3" href="{{ route('admin.product.create') }}">Create Product</a>

        <table class="table" style="border: 2px solid #1b1e21">
            <thead>
            <tr class="text-center col-12" style="border: 4px solid #1b1e21">
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th scope="col">Age</th>
                <th scope="col">Gender</th>
                <th scope="col">Address</th>
                <th scope="col">Patronymic</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            @foreach($products as $product)
                <tr style="border: 2px solid darkgrey">
                    <th class="text-center" scope="row">{{ $product->id }}</th>
                    <td class="text-center"><a href="{{ route('admin.product.show', $product->id) }}">{{ $product->name }}</a></td>
                    <td class="text-center">{{ $product->surname }}</td>
                    <td class="text-center">{{ $product->age }}</td>
                    <td class="text-center">{{ $product->genderTitle }}</td>
                    <td class="text-center">
                        <div class="textContainer">
                            <p class="displayText">
                                {{ $product->address }}
                            </p>
                            <button class="toggleButton btn-primary btn-sm">Show-more</button>
                        </div>
                    </td>
                    <td class="text-center">{{ $product->patronymic }}</td>
                    <td class="text-center">{{ $product->email }}</td>
                    <td class="text-center">
                        <div class="textContainer">
                            <p class="displayText">
                                {{ $product->password }}
                            </p>
                            <button class="toggleButton btn-primary btn-sm">Show-more</button>
                        </div>
                    </td>
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
