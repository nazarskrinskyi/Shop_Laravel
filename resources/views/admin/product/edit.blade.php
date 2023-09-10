@extends('layouts.admin')

@section('content')

    <h1 class="text-center">Edit User</h1>
    <div class="row justify-content-center mt-4">
        <div class="col-lg-6 col-md-8 col-sm-10">
            <form method="POST" action="{{ route('admin.product.update',$product->id) }}" enctype="multipart/form-data">
                @csrf
                @method('PATCH')
                <div class="mb-3 col-md-12 row">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" id="title" autocomplete="on" class="form-control" name="title"
                           placeholder="title..." value="{{ ($product->title ?? old('title')) }}">
                    @error('title')
                    <strong class="text-danger">{{ $message }}</strong>
                    @enderror
                </div>

                <div class="mb-3 col-md-12 row">
                    <label for="desc" class="form-label">Description</label>
                    <textarea id="desc" autocomplete="on" class="form-control" name="description"
                              placeholder="description...">
                            {{ ($product->description ?? old('description')) }}
                        </textarea>
                    @error('description')
                    <strong class="text-danger">{{ $message }}</strong>
                    @enderror
                </div>

                <div class="mb-3 col-md-12">
                    <p style="margin-bottom: -3px">
                        <label for="summernote" class="form-label">Content</label>
                    </p>
                    <textarea type="text" id="summernote" class="form-control"
                              name="content" placeholder="content..." autocomplete="on">{{ ($product->content ?? old('content')) }}
                    </textarea>
                    @error('content')
                    <strong class="text-danger">{{ $message }}</strong>
                    @enderror
                </div>


                <div class="mb-3 col-12 row justify-content-between">
                    <div class="col-6">
                        <label for="exampleInputFile">Preview Image</label>
                        <div class="input-group">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" name="preview_image">
                                <label class="custom-file-label">Choose file</label>
                            </div>
                            <div class="input-group-append">
                                <span class="input-group-text">Upload</span>
                            </div>
                        </div>
                        @error('preview_image')
                        <strong class="text-danger">{{ $message }}</strong>
                        @enderror
                    </div>

                    <div class="col-6">
                        <label for="exampleInputFile">Hover Image</label>
                        <div class="input-group">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" name="hover_image">
                                <label class="custom-file-label">Choose file</label>
                            </div>
                            <div class="input-group-append">
                                <span class="input-group-text">Upload</span>
                            </div>
                        </div>
                        @error('hover_image')
                        <strong class="text-danger">{{ $message }}</strong>
                        @enderror
                    </div>
                </div>


                <div class="mb-3 col-12 row justify-content-between">
                    <div class="col-6">
                        <label for="cost" class="form-label">Price</label>
                        <input type="number" min="1" id="cost" autocomplete="on" class="form-control" name="price"
                               placeholder="price..." value="{{ ($product->price ?? old('price')) }}">
                        @error('price')
                        <strong class="text-danger">{{ $message }}</strong>
                        @enderror
                    </div>
                    <div class="col-6">
                        <label for="cost" class="form-label">Discount Price</label>
                        <input type="number" min="1" id="cost" autocomplete="on" class="form-control" name="discount_price"
                               placeholder="discount_price..." value="{{ ($product->discount_price ?? old('discount_price')) }}">
                        @error('discount_price')
                        <strong class="text-danger">{{ $message }}</strong>
                        @enderror
                    </div>
                </div>

                <div class="mb-3 col-12 row justify-content-between">
                    <div class="col-6">
                        <label for="category" class="form-label">Category</label>
                        <select id="category" name="category_id" class="form-control">
                            <option value="">Choose category</option>
                            @foreach($categories as $category)
                                <option
                                    value="{{ $category->id }}" {{ ($product->category->id ?? old('category_id')) == $category->id ? 'selected' : '' }}>
                                    {{ $category->title }}
                                </option>
                            @endforeach
                        </select>
                        @error('category_id')
                        <strong class="text-danger">{{ $message }}</strong>
                        @enderror
                    </div>

                    <div class="col-6">
                        <label for="tags" class="form-label">Tags</label>
                        <select id="tags" name="tags[]" class="select2-primary w-100" multiple="multiple" data-placeholder="Choose tags">
                            @foreach($tags as $tag)
                                <option value="{{ $tag->id }}"
                                        @if(!empty($product->tags) && in_array($tag->id, $product->tags->pluck('id')->toArray()))
                                            selected
                                        @elseif(!empty(old('tags')) && in_array($tag->id, old('tags')))
                                            selected
                                    @endif
                                >
                                    {{ $tag->title }}
                                </option>
                            @endforeach
                        </select>
                    </div>
                    @error('tags')
                    <strong class="text-danger">{{ $message }}</strong>
                    @enderror
                </div>

                <div class="mb-3 col-12 row justify-content-between">
                    <div class="col-6">
                        <label for="quantity" class="form-label">Quantity</label>
                        <input type="number" min="1" id="quantity" autocomplete="on" class="form-control"
                               name="quantity"
                               placeholder="quantity..." value="{{ ($product->quantity ?? old('quantity')) }}">
                        @error('quantity')
                        <strong class="text-danger">{{ $message }}</strong>
                        @enderror
                    </div>

                    <div class="col-6">
                        <label for="colors" class="form-label">Colors</label>
                        <select id="colors" name="colors[]" class="select2-primary select2-cyan w-100" multiple="multiple" data-placeholder="Choose colors">
                            @foreach($colors as $color)
                                <option value="{{ $color->id }}"
                                        @if(!empty($product->colors) && in_array($color->id, $product->colors->pluck('id')->toArray()))
                                            selected
                                        @elseif(!empty(old('colors')) && in_array($color->id, old('colors')))
                                            selected
                                    @endif
                                >
                                    {{ $color->title }}
                                </option>
                            @endforeach
                        </select>

                        @error('colors')
                        <strong class="text-danger">{{ $message }}</strong>
                        @enderror
                    </div>
                </div>

                <div class="form-group" style="font-size: large;margin-left: 10px">
                    <input name="is_published" value="{{ true }}" {{ ($product->is_published ?? old('is_published')) ? 'checked' : '' }}
                           type="checkbox" id="is_published" class="form-control-check" style="transform: scale(1.7);">
                    <label for="is_published" style="margin-left: 10px" class="form-label">Is Published</label>
                    @error('is_published')
                    <strong class="text-danger">{{ $message }}</strong>
                    @enderror
                </div>

                <button type="submit" class="btn btn-primary mt-2">Edit</button>
            </form>
        </div>
    </div>
@endsection
