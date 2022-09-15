const menu_wrapper = document.querySelector('.menu_wrapper');
const buttons = document.querySelectorAll('div#mobile_menu > button');
const mobile_menu = document.querySelector('#mobile_menu');
const nav_el = document.querySelector('nav');
const wrapper_one = document.querySelector('.wrapper_1');
const mobile_menu_p = document.querySelector('div#mobile_menu > p');
const mobile_hr = document.querySelectorAll('.mobile_hr');
const wrapper_six = document.getElementsByClassName('wrapper_6')[0];
const wrapper_for = document.getElementsByClassName('wrapper_4')[0];
const wrapper_three = document.getElementsByClassName('wrapper_3')[0];
const bigButton = document.querySelector('div.wrapper_1 > div > button');

// JS CSS -------------------------------------------------------------------

wrapperOneStyle = () => {
  wrapper_one.style.position = 'relative';
};

pStyle = () => {
  mobile_menu_p.style.color = 'black';
  mobile_menu_p.style.fontSize = '16px';
  mobile_menu_p.style.display = 'block';
  mobile_menu_p.style.width = '100%';
  mobile_menu_p.style.margin = '15px 0 0 0';
  mobile_menu_p.style.paddingBottom = '17px';
  mobile_menu_p.style.paddingRight = '16px';
  mobile_menu_p.style.boxSizing = 'border-box'
  mobile_menu_p.style.borderBottom = '1px solid #3E3D3A';
  mobile_menu_p.style.lineHeight = 'initial';
};

ButtonsStyle = () => {
  buttons.forEach(element => {
    element.style.display = 'block';
    element.style.color = 'black';
    // element.attributes('style', ''); remove js styles
  });

  buttons[0].style.padding = '11px 0 14px 24px'
  buttons[1].style.padding = '12px 0 12px 24px'

  buttons[2].style.border = '2px solid #A44A22'
  buttons[2].style.color = '#A44A22'
  buttons[2].style.margin = '24px auto 0 auto'
};

mobileMenuStyle = () => {
  let width = 0;
  let sectionHeight = wrapper_one.clientHeight.toString();

  mobile_menu.style.position = 'absolute';
  mobile_menu.style.height = sectionHeight + 'px';
  mobile_menu.style.top = '0px';
  mobile_menu.style.backgroundColor = '#FEFAF1';
  mobile_menu.style.width = '82.5%'
};

navElStyle = () => {
  let elHeight = nav_el.clientHeight.toString();

  nav_el.style.boxSizing = 'border-box'
  nav_el.style.height = elHeight + 'px';
};

menuWrapperStyle = () => {
  menu_wrapper.style.display = 'block';
  menu_wrapper.style.position = 'absolute';
  menu_wrapper.style.left = '-42px';
  menu_wrapper.style.top = '23px';
  menu_wrapper.style.margin = '0 0 0 0';
  
};

mobileHrStyle = () => {
  mobile_hr.forEach( hr => {
    hr.style.display = 'block';
  });
};


// FUNCTIONS -------------------------------------------------------------------

removeInlineCss = (args) => {
  args.forEach(arg => {
    arg.removeAttribute("style")
  });
};

hideMobileDrawer = () => {
  const elWidth = -mobile_menu.clientWidth;

  close_draw = setInterval(() => {
    // get element current position right
    let elRightCurrent = parseInt(mobile_menu.style.right);

    if (elRightCurrent == elWidth) {
      clearInterval(close_draw);
      mobile_menu.style.display = 'none';
      removeInlineCss([menu_wrapper, ...buttons, mobile_menu, nav_el, wrapper_one, mobile_menu_p, ...mobile_hr]);
    } else {
      elRightCurrent -= 1;
      mobile_menu.style.right = elRightCurrent + 'px';
    }
  }, 4);
};

showMobileDrawer = () => {
  // position element off screen
  const elWidth = mobile_menu.clientWidth;
  mobile_menu.style.right = '-' + elWidth + 'px';

  // position element correctly with animation
  open_draw = setInterval(() => {
    // get element current position right
    let elRightCurrent = parseInt(mobile_menu.style.right);

    if (elRightCurrent === 0) {
      clearInterval(open_draw);
    } else {
      elRightCurrent += 1;
      mobile_menu.style.right = elRightCurrent + 'px';
    }
  }, 4);
};

scrollInto = (element) => {
  console.log('scroll')
  element.scrollIntoView();
}

// APP -------------------------------------------------------------------

let mobileMenuVisible = false;

menu_wrapper.addEventListener('click', (e) => {
  if (mobileMenuVisible) {
    hideMobileDrawer();
    

    mobileMenuVisible = false;
  } else {
    wrapperOneStyle();
    navElStyle();
    ButtonsStyle();
    menuWrapperStyle();
    pStyle();
    mobileHrStyle();
    mobileMenuStyle();
    showMobileDrawer();
    mobileMenuVisible = true;
  }
  
});

buttons[2].addEventListener('click', () => {
  wrapper_six.scrollIntoView({behavior: "smooth", block: "end"});
});

bigButton.addEventListener('click', () => {
  wrapper_six.scrollIntoView({behavior: "smooth", block: "end"});
});

buttons[1].addEventListener('click', () => {
  wrapper_for.scrollIntoView({behavior: "smooth", block: "end"});
});

buttons[0].addEventListener('click', () => {
  wrapper_three.scrollIntoView({behavior: "smooth", block: "end"});
});

// EMAIL SIUNTIMAS IN PROGRESS... :)