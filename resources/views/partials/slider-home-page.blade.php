<?php
	$slides = [
		[
			'title' => 'Lorem ipsum dolor sit amet',
			'description' => 'Aenean nec arcu tristique, lobortis ipsum ut, pellentesque purus. Duis id tincidunt eros. Mauris pretium scelerisque enim sit amet pellentesque.',
			'link' => 'https://google.ca',
			'image' => [
				'link' => 'https://images.unsplash.com/photo-1501389446297-06c4c50b5ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
			]
		],
		[
			'title' => 'Lorem ipsum dolor sit amet',
			'description' => 'Aenean nec arcu tristique, lobortis ipsum ut, pellentesque purus. Duis id tincidunt eros. Mauris pretium scelerisque enim sit amet pellentesque.',
			'link' => 'https://google.ca',
			'image' => [
				'link' => 'https://images.unsplash.com/photo-1484910292437-025e5d13ce87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3788&q=80'
			]
		],
	];
?>

<section class="block__slider block__slider-homepage">
		
	<div class="swiper-container">
		
		<div class="swiper-wrapper">
			@foreach($slides as $key => $slide)
				<div class="swiper-slide" data-color="" style="background-image: url({{ $slide['image']['link'] }})">
					<div class="overlay lightGrey"></div>
					<div class="content wrapper">
						<p class="sub-line">Dolor sit amet bro</p>
						<h2 clas="project-title">{{ $slide['title'] }}</h2>
						<p class="project-description">{{ $slide['description'] }}</p>
						<a href="{{ $slide['link'] }}" class="project-link">Voir le projet ></a>
					</div>
				</div>
			@endforeach
		</div>

		<div class="swiper-pagination"></div>

	</div>

</section>