
// typing animation

var _CONTENT = [ "Find Over 25000+ Colleges in India", "Find Over 250+ Exams in India", "Find Over 11000+ Courses in India" ];
var _PART = 0;
var _PART_INDEX = 0;
var _INTERVAL_VAL;
var _ELEMENT = document.querySelector("#text");
function Type() { 
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;
	if(text === _CONTENT[_PART]) {
		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}
function Delete() {
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;
	if(text === '') {
		clearInterval(_INTERVAL_VAL);
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 0;
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

_INTERVAL_VAL = setInterval(Type, 100);


// -----------------------------

let carouselinfromation = document.querySelectorAll('#InformationSection .carousel .carousel-item');
carouselinfromation.forEach((el) => {
  const minPerSlide = 4
  let next = el.nextElementSibling
  for (var i=1; i<minPerSlide; i++) {
    if (!next) {
      next = carouselinfromation[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
})
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-LLWL5N9CSM');


// -----------------------------

let carouseluniversity = document.querySelectorAll('#UniversitySection .carousel .carousel-item');
carouseluniversity.forEach((el) => {
  const minPerSlide = 4
  let next = el.nextElementSibling
  for (var i=1; i<minPerSlide; i++) {
    if (!next) {
      next = carouseluniversity[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
})
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-LLWL5N9CSM');


// -----------------------------

let carouselcourses = document.querySelectorAll('#CoursesSection .carousel .carousel-item');
carouselcourses.forEach((el) => {
  const minPerSlide = 4
  let next = el.nextElementSibling
  for (var i=1; i<minPerSlide; i++) {
    if (!next) {
      next = carouselcourses[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
})
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-LLWL5N9CSM');


// -----------------------------

let carouselexam = document.querySelectorAll('#ExamSection .carousel .carousel-item');
carouselexam.forEach((el) => {
  const minPerSlide = 4
  let next = el.nextElementSibling
  for (var i=1; i<minPerSlide; i++) {
    if (!next) {
      next = carouselexam[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
})
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-LLWL5N9CSM');


// -----------------------------

let carouselstudy = document.querySelectorAll('#StudySection .carousel .carousel-item');
carouselstudy.forEach((el) => {
  const minPerSlide = 3
  let next = el.nextElementSibling
  for (var i=1; i<minPerSlide; i++) {
    if (!next) {
      next = carouselstudy[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
})
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-LLWL5N9CSM');


// -----------------------------

let carouselplace = document.querySelectorAll('#PlaceSection .carousel .carousel-item');
carouselplace.forEach((el) => {
  const minPerSlide = 7
  let next = el.nextElementSibling
  for (var i=1; i<minPerSlide; i++) {
    if (!next) {
      next = carouselplace[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
})
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-LLWL5N9CSM');


// -----------------------------

// Less And More
function viewMore() {
	var dots = document.getElementById("show");
	var moreText = document.getElementById("hide");
	var btnText = document.getElementById("viewmore");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "View More"; 
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "View Less"; 
	  moreText.style.display = "inline";
	}
}


// Sidebar Script
(function ($, pluginName) {
  var defaults = {
    htmlClass: true
  }

  function Plugin (element, options) {
    this.element = element
    this.eventController = eventController
    this.options = $.extend({}, defaults, options)
    this.options.initialized = false

    this.init()
  }

  Plugin.prototype.init = function () {
    var sidebar = this.element
    var options = this.options
    var eventController = this.eventController.bind(this)

    if (options.initialized === true) return

    eventController('loading')

    sidebar.find('[data-submenu]').on('click', function (event) {
      event.preventDefault()

      var self = $(this)
      var subMenuId = self.attr('data-submenu')
      var subMenuEl = $('#' + subMenuId)

      if (!subMenuEl.length) return

      var eventDetails = {
        subMenu: true,
        menuId: subMenuId
      }

      eventController('opening', eventDetails)

      sidebar.find('.submenu.current').removeClass('current')
      subMenuEl.addClass('opened current')
      !sidebar.hasClass('submenu-opened') && sidebar.addClass('submenu-opened')

      sidebar[0].scrollTo({ top: 0 })

      eventController('opened', eventDetails)
    })

    sidebar.find('[data-submenu-close]').on('click', function (event) {
      event.preventDefault()

      var self = $(this)
      var subMenuId = self.attr('data-submenu-close')
      var subMenuEl = $('#' + subMenuId)

      if (!subMenuEl.length) return

      var eventDetails = {
        subMenu: true,
        menuId: subMenuId
      }

      eventController('closing', eventDetails)

      subMenuEl.removeClass('opened current')
      sidebar.find('.submenu.opened').last().addClass('current')
      !sidebar.find('.submenu.opened').length && sidebar.removeClass('submenu-opened')

      subMenuEl[0].scrollTo({ top: 0 })

      eventController('closed', eventDetails)
    })

    eventController('load')

    this.options.htmlClass && !$('html').hasClass('sidebar-initialized') && $('html').addClass('sidebar-initialized')

    options.initialized = true
  }

  Plugin.prototype.open = function () {
    this.eventController(
      'opening',
      { subMenu: false }
    )

    this.element.addClass('opened')
    this.options.htmlClass && $('html').addClass('sidebar-opened')

    this.eventController(
      'opened',
      { subMenu: false }
    )
  }

  Plugin.prototype.close = function (disableEvent) {
    !disableEvent && this.eventController('closing', { subMenu: false })

    this.element.removeClass('opened')
    this.options.htmlClass && $('html').removeClass('sidebar-opened')

    !disableEvent && this.eventController('closed', { subMenu: false })
  }

  Plugin.prototype.destroy = function () {
    this.eventController('destroying')

    this.close(true)

    this.element.find('.submenu.opened').removeClass('opened')

    this.element.removeData(pluginName)

    this.eventController('destroyed')

    this.options = defaults

    this.options.htmlClass && $('html').removeClass('sidebar-initialized')

    delete this.element
    delete this.options
    delete this.eventController
  }

  Plugin.prototype.on = function (name, handler) {
    eventBinder.call(this, name, handler)
  }

  var eventController = function (type, details) {
    if (!this.options[type]) return
    if (typeof this.options[type] !== 'function') throw Error('event handler must be a function: ' + type)

    this.options[type].call(this, this.element, this.options, details)
  }

  var getInstance = function (element, options) {
    var instance = null

    if (!element.data(pluginName)) {
      instance = new Plugin(element, options || {})

      element.data(pluginName, instance)
    } else {
      instance = element.data(pluginName)
    }

    return instance
  }

  var eventBinder = function (name, handler) {
    if (typeof name !== 'string') throw Error('event name is expected to be a string but got: ' + typeof name)
    if (typeof handler !== 'function') throw Error('event handler is not a function for: ' + name)

    this.options[name] = handler
  }

  $.fn[pluginName] = function (options) {
    var instance = getInstance($(this[0]), options)

    return instance
  }
})(window.jQuery || window.cash, 'sidebar')
