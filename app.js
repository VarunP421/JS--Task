const standardRoom = document.getElementById("standard");
const deluxeRoom = document.getElementById("deluxe");
const suiteRoom = document.getElementById("suite");
const form = document.getElementById("calBill");
const noOfNights = document.getElementById("nights");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  document.getElementById("standardCount").textContent =
    standardRoom.value || "-";
  document.getElementById("deluxeCount").textContent = deluxeRoom.value || "-";
  document.getElementById("suiteCount").textContent = suiteRoom.value || "-";

  if (Number(standardRoom.value) !== 0)
    document.getElementById("standardNights").textContent = noOfNights.value;
  if (Number(deluxeRoom.value) !== 0)
    document.getElementById("deluxeNights").textContent = noOfNights.value;
  if (Number(suiteRoom.value) !== 0)
    document.getElementById("suiteNights").textContent = noOfNights.value;

  let totalBill = 0;

  const standardAmt = standardRoom.value * 2000 * noOfNights.value;
  document.getElementById("standardAmount").textContent = `₹${standardAmt}`;

  const deluxeAmt = deluxeRoom.value * 3500 * noOfNights.value;
  document.getElementById("deluxeAmount").textContent = `₹${deluxeAmt}`;

  const suiteAmt = suiteRoom.value * 6000 * noOfNights.value;
  document.getElementById("suiteAmount").textContent = `₹${suiteAmt}`;

  totalBill = standardAmt + deluxeAmt + suiteAmt;
  document.getElementById("roomCharges").textContent = "₹" + totalBill;

  let discount = 0;
  if (totalBill > 20000) {
    discount += totalBill * 0.15;
  }
  if (Number(noOfNights.value) >= 7) {
    discount += totalBill * 0.05;
  }

  if (discount) {
    document.getElementById("discount").textContent = "- ₹" + discount;
    document.getElementById("discount").style.color = "#2e7d32";
    document.getElementById("discountRow").style.display = "grid";
  }

  totalBill -= discount;
  if (totalBill > 25000) {
    totalBill += 500;
    document.getElementById("serviceChargeRow").style.display = "grid";
    document.getElementById("serviceCharge").innerHTML = "+ ₹500";
  }

  const gstAmt = totalBill * 0.18;
  document.getElementById("gst").textContent = "+ ₹" + gstAmt;
  document.getElementById("gst").style.color = "#757575";

  totalBill += gstAmt;
  document.getElementById("totalAmount").textContent =
    "₹" + totalBill.toFixed(2);
});
