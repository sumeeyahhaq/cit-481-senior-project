// Checks if the device is mobile or desktop
function checkDevices() {
	let isMobile = navigator.userAgent.match(
		/(iPhone|iPod|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini)/i
	);

	//Checks if it is ipad or iphone
	let isIOS =
		(/iPad|iPhone|iPod/.test(navigator.platform) ||
			(navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) &&
		!window.MSStream;

	if (isMobile || isIOS) {
		//Removes class drop on mobile because hover does not support on mobiles
		var classRemove = document.querySelectorAll(".drop");
		for (var i = 0; i < classRemove.length; i++) {
			classRemove[i].classList.remove("drop");
		}

		//Closes drop down menu after selection has been made on mobile devices
		$(".navbar").on("click", ".dropdown-item", function () {
			$(".navbar-collapse").collapse("hide");
		});

		//Adding opacity to the whole page when menu is open

		// //Checks if hamburger button is clicked and menu is visible
		$(".navbar").on("click", ".navbar-toggler", function () {
			var menuIsVisible = $("#navbarNav").is(":visible");
			checkMenuVisiblity(menuIsVisible);
		});

		//Checks if hamburger button is clicked and Submenu is visible
		$(".navbar").on("click", ".dropdown-item", function () {
			var menuIsVisible = $("#navbarNav").is(":visible");
			checkMenuVisiblity(menuIsVisible);
		});

		//This function adds and removes fixedPosition class which gives opacity to the main
		function checkMenuVisiblity(menuIsVisible) {
			if (!menuIsVisible) {
				$("main").addClass("fixedPosition");
			} else {
				$("main").removeClass("fixedPosition");
			}
		}
	}

	// removes drop class on desktop mode to deactivates hover feature
	else {
		var dropClass = document.getElementById("remove-hover");
		$(".navbar").on("click", ".dropdown-item", function () {
			// removes drop class to disable hover
			dropClass.classList.remove("drop");
			//Waits 1 seconds and activates hover feature again
			setTimeout(function () {
				dropClass.classList.add("drop");
			}, 100);
		});
	}
}
