$(function(){
	var win_w = $(window).width();
	var btnSm = function(){
		$('.btn-lg').addClass('btn-sm');
	}
	var removebtnSm = function(){
		$('.btn-lg').removeClass('btn-sm');
	}

	$(window).on('resize', function(){
		win_w = $(this).width();
		if( win_w < 576 ){
			btnSm();
		}else{
			removebtnSm();
		}
	});

	 if( win_w < 576 ){
		btnSm();
	  }else{
		removebtnSm();
	  }
	
	//임시로 예약하기 속성변경
	// var navLink = $('.navbar-nav .nav-item:nth-child(3) .nav-link');
	// navLink.removeAttr('data-bs-toggle');
	// navLink.attr('href','https://roomio.speedgabia.com/dev/html/marysForest/prepare.html');
	// navLink.removeClass('dropdown-toggle');
	// navLink.next('.dropdown-menu').hide();
	

	
	var btnPg = $('.btn_pg');
	btnPg.on('click', function(e) {


		if ($('input[name="nm"]').val() == "") {
			alert('이름을 입력해주세요');
			$('input[name="nm"]').focus();
			e.preventDefault();
		} else if ($('input[name="phone"]').val() == "") {
			alert('휴대폰번호를 입력해주세요');
			$('input[name="phone"]').focus();
			e.preventDefault();
		} else if ($('input[name="email"]').val() == "") {
			alert('이메일주소를 입력해주세요');
			$('input[name="email"]').focus();
			e.preventDefault();
		} else if ($('input[type="checkbox"]').length > 0 && ($('.one_check input').length !== $('.one_check input:checked').length)) {
			alert('전체 약관 내용에 동의하셔야 결제하실 수 있습니다.');
			e.preventDefault();
		} else if ($('input[name="rvtNumber"]').val() == "") {
			alert('예약내역이 없습니다. \n다시 확인 후 입력해주세요.');
			e.preventDefault();
		}
	});

	// var rvtNumber = $('input[name="rvtNumber"]');
	// rvtNumber.on({
	// 	keydown: function(){
	// 		var rvtNumberValLen = rvtNumber.val().length;

	// 		console.log(rvtNumberValLen);
	// 		if(rvtNumberValLen > 11){
	// 			//rvtNumberValLen = rvtNumber.val().slice(0, 11)
	// 			return rvtNumberValLen.substr(0,11)+""
	// 		}
	// 	}
	// });
	



	// 약관규정 동의 후 체크박스 활성화하기
	$('.modal .agree_btn').on({
		click: function() {
			var formCheck = $(this).parents('.form-check');
			var checkInput = $(this).parents('.form-check').find('.check_input');

			formCheck.find('.check_input input').prop('checked', true);
			checkInput.removeAttr('data-bs-toggle');
			formCheck.find('.check_input input').attr('disabled', false);
		}
	});

	// $('.modal_1 .agree_btn').on({
	//   click: function(){
	//     $('.modal_open1').children('input').prop('checked', true);
	//     $('.modal_open1:not(.check_view)').removeAttr('data-bs-toggle');
	//     $('.modal_open1 input').attr('disabled', false)
	//   }
	// });

	//체크박스 - 체크해제하기
	$('.check_input input').on({
		click: function() {
			console.log($(this).prop('checked'));
			console.log($(this));
			if ($(this).prop('checked') === false) { //체크박스의 체크를 해제할 때
				$(this).prop('disabled', true);
				if ($(this).prop('disabled') === true) {
					$(this).parents('.check_input').attr('data-bs-toggle', 'modal');
					$(this).parents('.check_input').next('button').attr('data-bs-toggle', 'modal');
				}
			} else if ($(this).prop('checked') === true) {
				console.log($(this).prop('checked', true));
				$(this).attr('disabled')
			}
		}
	});




});




// 플러스 / 마이너스 버튼
// function p_minus(obj) {
//   var val = obj.next('input').val();
//   if (val <= 0) {
//       return;
//   }
//   obj.next('input').val(--val);
// }

// function p_plus(obj) {
//   var val = obj.prev('input').val();
//   if (val >= 4) {
//       return;
//   }
//   obj.prev('input').val(++val);
// }

// function modal_open(checkBox) {
//   checkBox.siblings('.modal').addClass('show');
//   checkBox.siblings('.modal').css('display', 'block');
//   checkBox.siblings('.modal').prop('aria-modal', true)
//   console.log(checkBox.siblings('.modal').prop('aria-modal'))
//   //checkBox.siblings('.modal')
// }



function modal_open(checkBox) {
	checkBox.siblings('.modal').addClass('show');
	checkBox.siblings('.modal').css('display', 'block');
	checkBox.siblings('.modal').prop('aria-modal', true)
	console.log(checkBox.siblings('.modal').prop('aria-modal'))
	//checkBox.siblings('.modal')
}
function maxLengthCheck(object){
    if (object.value.length > object.maxLength){
        object.value = object.value.slice(0, object.maxLength);
    }    
}
