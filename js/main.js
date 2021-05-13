$(function () {
  $(".datepik").datepicker({
    dateFormat: "dd MM",
    minDate: new Date($("#hiddendelivdate").val()),
    monthNames: [
      "января",
      "Февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ],
    dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
  });
  $(function () {
    (function quantityProducts() {
      var $quantityArrowMinus = $(".quantity1");
      var $quantityArrowPlus = $(".quantity2");
      var $quantityNum = $(".quantity-input");

      $quantityArrowMinus.click(quantityMinus);
      $quantityArrowPlus.click(quantityPlus);

      function quantityMinus() {
        if ($quantityNum.val() > 1) {
          $quantityNum.val(+$quantityNum.val() - 1);
        }
      }

      function quantityPlus() {
        $quantityNum.val(+$quantityNum.val() + 1);
      }
    })();
    (function quantityProducts() {
      var $quantityArrowMinus = $(".quantity-arrow");
      var $quantityArrowPlus = $(".quantity-arrow2");
      var $quantityNum = $(".quantity-input2");

      $quantityArrowMinus.click(quantityMinus);
      $quantityArrowPlus.click(quantityPlus);

      function quantityMinus() {
        if ($quantityNum.val() > 1) {
          $quantityNum.val(+$quantityNum.val() - 1);
        }
      }

      function quantityPlus() {
        $quantityNum.val(+$quantityNum.val() + 1);
      }
    })();
    (function quantityProducts() {
      var $quantityArrowMinus = $(".quantity-arrow-chil");
      var $quantityArrowPlus = $(".quantity-arrow-chil2");
      var $quantityNum = $(".quantity-input3");

      $quantityArrowMinus.click(quantityMinus);
      $quantityArrowPlus.click(quantityPlus);

      function quantityMinus() {
        if ($quantityNum.val() > 0) {
          $quantityNum.val(+$quantityNum.val() - 1);
        }
      }

      function quantityPlus() {
        $quantityNum.val(+$quantityNum.val() + 1);
      }
    })();
  });
});
