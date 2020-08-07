<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

  @include('partials.head')

  <body class="page__{{ $body_class ? $body_class : '' }}">

    @include('partials.header')

    <div class="wrap" role="document">
        <div class="content">
            <main class="main">
                @yield('content')
            </main>
        </div>
    </div>

    @include('partials.footer')

  </body>
</html>
