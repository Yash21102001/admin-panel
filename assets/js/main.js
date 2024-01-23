// top btn
$(window).scroll(function () {
    if (scrollY > 100) {
      $('.top_btn').addClass('d-block');
    }
    else {
      $('.top_btn').removeClass('d-block');
    }
  });
  

  $(document).ready(function () {
  
  
    $('.header_icons li').on('click',function(){
      $('.header_icons li').css('background-color','#e1ebfd')
    });
  
    $('.nav-link').on('click', function () {
      $('.nav-link .a').removeClass('ri-arrow-down-s-line');
      $('.nav-link .a').addClass('ri-arrow-right-s-line');
      $(this).next('.menu_dropdown').toggle(1000);
      $('.menu_dropdown').not($(this).next('.menu_dropdown')).slideUp(1000);
      $(this).children('.a').removeClass('ri-arrow-right-s-line');
      $(this).children('.a').addClass('ri-arrow-down-s-line');
    });
  
    $('#full').on('click', function () {
      $('.ri-fullscreen-line').toggleClass('ri-fullscreen-exit-line');
    });
  
    $('.r_dropdown_btn').on('click', function () {
      $('.r_d_menu').toggle();
    });
  
    $('.t_dropdown_btn').on('click', function () {
      $('.t_d_menu').toggle();
    });
  
    $('.dropdown_btn').on('click', function () {
      $('.b_d_menu').toggle();
    });
  
    $('.profile').on('click', function () {
      $('.dropdown_menu').toggle();
    });
  
    $('.country').on('click', function () {
      $('.country-dropdown-menu').toggle();
    });
  
    $('.apps').on('click', function () {
      $('.apps-dropdown-menu').toggle();
    });
  
    // dark theme
    $('#moon').on('click', function () {
      $('body').toggleClass('moon');
      $('.ri-moon-line').toggleClass('ri-sun-line');
      $('aside').toggleClass('dark');
      if ($('body').hasClass('moon')) {
        $(':root').css('--white', '#292e32');
        $(':root').css('--border-color', '#32383e');
        $(':root').css('--search-bar', '#000');
        $(':root').css('--d-item-color', '#ced4da');
        $(':root').css('--heading-color', '#ced4da');
        $(':root').css('--search-bar-text', '#e9ebec');
        $(':root').css('--card-header', '#292e32');
        $(':root').css('--thead-background', '#282b2e');
        $(':root').css('--vz-vertical-menu-title-color', '#7c7f90');
        $(':root').css('--vertical-menu-sub-item-color', '#7c7f90');
  
        $('.card_contant a').css('color', '#fff');
        $('#date').css('--d-item-color', '#fff');
        $('.cal_icon').css('color', '#fff');
        $('.orders, .ernings, .refunds, .c_ratio').css('border-color', '#32383e');
        $('.card_header h5').css('color', '#ced4da');
        $('.c_ratio h5').css('color', '#0ab39c');
        $('.m_body p').css('color', '#ced4da');
        $('.a_d_heading').css('color', '#ced4da');
        $('.rt_td,.r_rating').css('color', '#ced4da');
      }
      else {
        $(':root').css('--white', '#fff');
        $(':root').css('--border-color', '#e9ebec');
        $(':root').css('--search-bar', '#f3f3f9');
        $(':root').css('--search-bar-text', '#495057');
        $(':root').css('--card-header', '#f9fbfc');
        $(':root').css('--d-item-color', '#212529');
        $(':root').css('--heading-color', '#495057');
        $(':root').css('--thead-background', '#f3f6f9');
        $(':root').css('--vz-vertical-menu-title-color', '#838fb9');
        $(':root').css('--vertical-menu-sub-item-color', '#abb9e8');
  
        $('.orders, .ernings, .refunds, .c_ratio').css('border-color', '#e9ebec');
        $('.card_header h5').css('color', '#495057');
        $('.c_ratio h5').css('color', '#0ab39c');
        $('#date').css('--d-item-color', '#212529');
        $('.rt_td,.r_rating').css('color', '#000');
        $('.card_contant a').css('color', 'rgb(64, 81, 137)');
      }
    });
  
    $('.search_bar').on('click', function () {
      $(this).toggleClass('fa-arrow-right');
      $('aside').toggleClass('w-70');
      $('aside').toggleClass('w-260');
      $('.main_body').toggleClass('ml-70');
      $('.navbar_header').toggleClass('ml-70');
      $('.b_footer').toggleClass('l-72');
      $('.input').toggleClass('w-auto');
      $('.input').toggleClass('p');
      $('aside').toggleClass('d-block');
      $('.date_picker,.add_product').toggleClass('mb-0');
  
      $('.menu').toggleClass('d-block');
      $('.menu').toggleClass('menu-d-none');
      $('.menu-1').toggleClass('d-none');
      $('.menu-1').toggleClass('menu-1-d-block');
  
  
      var img_1 = $("img#logo");
      var img1_src = "assets/images/logo/logo.png";
      var img2_src = "assets/images/logo/logo-sm.png";
  
      if (img_1.attr("src") == img1_src) {
        img_1.attr("src", img2_src);
      }
      else {
        img_1.attr("src", img1_src);
      }
    });
  });