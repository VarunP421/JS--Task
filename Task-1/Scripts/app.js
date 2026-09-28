const form = document.getElementById("calBill");
const adminBtn = document.getElementById("adminBtn");
const adminForm = document.getElementById("admForm");

if (!localStorage.getItem("StdRoomCount"))
  localStorage.setItem("StdRoomCount", 15);

if (!localStorage.getItem("DelRoomCount"))
  localStorage.setItem("DelRoomCount", 15);

if (!localStorage.getItem("SuteRoomCount"))
  localStorage.setItem("SuteRoomCount", 15);

if (!localStorage.getItem("StdRoomPrice")) {
  localStorage.setItem("StdRoomPrice", 2000);
}

if (!localStorage.getItem("DelRoomPrice"))
  localStorage.setItem("DelRoomPrice", 3500);

if (!localStorage.getItem("SuteRoomPrice"))
  localStorage.setItem("SuteRoomPrice", 6000);

let StdRoomCount = Number(localStorage.getItem("StdRoomCount"));
let DelRoomCount = Number(localStorage.getItem("DelRoomCount"));
let SuteRoomCount = Number(localStorage.getItem("SuteRoomCount"));

let StdRoomPrice = Number(localStorage.getItem("StdRoomPrice"));
let DelRoomPrice = Number(localStorage.getItem("DelRoomPrice"));
let SuteRoomPrice = Number(localStorage.getItem("SuteRoomPrice"));



if (form) {
  document.getElementById("stdPriceDisplay").textContent = "₹" + StdRoomPrice;
  document.getElementById("delPriceDisplay").textContent = "₹" + DelRoomPrice;
  document.getElementById("suitePriceDisplay").textContent =
    "₹" + SuteRoomPrice;
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const standardRoom = Number(document.getElementById("standard").value);
    const deluxeRoom = Number(document.getElementById("deluxe").value);
    const suiteRoom = Number(document.getElementById("suite").value);
    const noOfNights = Number(document.getElementById("nights").value);

    if (standardRoom > StdRoomCount) {
      alert(`Only ${StdRoomCount} Standard rooms are available.`);
      return;
    }

    if (deluxeRoom > DelRoomCount) {
      alert(`Only ${DelRoomCount} Deluxe rooms are available.`);
      return;
    }

    if (suiteRoom > SuteRoomCount) {
      alert(`Only ${SuteRoomCount} Suite rooms are available.`);
      return;
    }
    if (standardRoom === 0 && deluxeRoom === 0 && suiteRoom === 0) {
      alert("Please select at least one room.");
      return;
    }
    if (standardRoom < 0 || deluxeRoom < 0 || suiteRoom < 0) {
      alert("Room count cannot be negative.");
      return;
    }
    if (noOfNights < 1) {
      alert("Number of nights must be at least 1.");
      return;
    }

    document.getElementById("standardCount").textContent = standardRoom || "-";
    document.getElementById("deluxeCount").textContent = deluxeRoom || "-";
    document.getElementById("suiteCount").textContent = suiteRoom || "-";

    if (standardRoom !== 0)
      document.getElementById("standardNights").textContent = noOfNights;
    if (deluxeRoom !== 0)
      document.getElementById("deluxeNights").textContent = noOfNights;
    if (suiteRoom !== 0)
      document.getElementById("suiteNights").textContent = noOfNights;

    let totalBill = 0;

    const standardAmt = standardRoom * StdRoomPrice * noOfNights;
    StdRoomCount -= standardRoom;
    document.getElementById("standardAmount").textContent = `₹${standardAmt}`;

    const deluxeAmt = deluxeRoom * DelRoomPrice * noOfNights;
    DelRoomCount -= deluxeRoom;
    document.getElementById("deluxeAmount").textContent = `₹${deluxeAmt}`;

    const suiteAmt = suiteRoom * SuteRoomPrice * noOfNights;
    SuteRoomCount -= suiteRoom;
    document.getElementById("suiteAmount").textContent = `₹${suiteAmt}`;

    localStorage.setItem("StdRoomCount", StdRoomCount);
    localStorage.setItem("DelRoomCount", DelRoomCount);
    localStorage.setItem("SuteRoomCount", SuteRoomCount);

    console.log(StdRoomCount, DelRoomCount, SuteRoomCount);

    totalBill = standardAmt + deluxeAmt + suiteAmt;
    document.getElementById("roomCharges").textContent = "₹" + totalBill;

    console.log(totalBill);

    let discount = 0;
    if (totalBill > 20000) {
      discount += totalBill * 0.15;
    }

    if (noOfNights >= 7) {
      discount += totalBill * 0.05;
    }

    if (discount) {
      document.getElementById("discount").textContent =
        "- ₹" + discount.toFixed(2);
      document.getElementById("discount").style.color = "#2e7d32";
      document.getElementById("discountRow").style.display = "grid";
    } else {
      document.getElementById("discountRow").style.display = "none";
      document.getElementById("discount").textContent = "";
    }

    totalBill -= discount;
    if (totalBill > 25000) {
      totalBill += 500;
      document.getElementById("serviceChargeRow").style.display = "grid";
      document.getElementById("serviceCharge").innerHTML = "+ ₹500";
    } else {
      document.getElementById("serviceChargeRow").style.display = "none";
      document.getElementById("serviceCharge").innerHTML = "";
    }

    const gstAmt = totalBill * 0.18;
    document.getElementById("gst").textContent = "+ ₹" + gstAmt.toFixed(2);
    document.getElementById("gst").style.color = "#757575";

    totalBill += gstAmt;
    document.getElementById("totalAmount").textContent =
      "₹" + totalBill.toFixed(2);
  });
}

if (adminForm) {
  document.getElementById("standardCount").value = StdRoomCount;
  document.getElementById("deluxeCount").value = DelRoomCount;
  document.getElementById("suiteCount").value = SuteRoomCount;

  document.getElementById("standardPrice").value = StdRoomPrice;
  document.getElementById("deluxePrice").value = DelRoomPrice;
  document.getElementById("suitePrice").value = SuteRoomPrice;

  adminForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const standardCountInput = document.getElementById("standardCount").value;
    const deluxeCountInput = document.getElementById("deluxeCount").value;
    const suiteCountInput = document.getElementById("suiteCount").value;

    const standardPriceInput = document.getElementById("standardPrice").value;
    const deluxePriceInput = document.getElementById("deluxePrice").value;
    const suitePriceInput = document.getElementById("suitePrice").value;

    StdRoomCount = standardCountInput === "" ? 15 : Number(standardCountInput);
    DelRoomCount = deluxeCountInput === "" ? 15 : Number(deluxeCountInput);
    SuteRoomCount = suiteCountInput === "" ? 15 : Number(suiteCountInput);

    StdRoomPrice =
      standardPriceInput === "" ? 2000 : Number(standardPriceInput);
    DelRoomPrice = deluxePriceInput === "" ? 3500 : Number(deluxePriceInput);
    SuteRoomPrice = suitePriceInput === "" ? 6000 : Number(suitePriceInput);

    localStorage.setItem("StdRoomCount", StdRoomCount);
    localStorage.setItem("DelRoomCount", DelRoomCount);
    localStorage.setItem("SuteRoomCount", SuteRoomCount);

    localStorage.setItem("StdRoomPrice", StdRoomPrice);
    localStorage.setItem("DelRoomPrice", DelRoomPrice);
    localStorage.setItem("SuteRoomPrice", SuteRoomPrice);

    console.log(StdRoomCount, DelRoomCount, SuteRoomCount);
    console.log(StdRoomPrice, DelRoomPrice, SuteRoomPrice);

    window.location.href = "index.html";
  });
}

if (adminBtn) {
  adminBtn.addEventListener("click", () => {
    window.location.href = "admin.html";
  });
}
