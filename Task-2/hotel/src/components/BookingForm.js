import Input from '../UI/Input';
import classes from './BookingForm.module.css'

const BookingForm = (props) => {

    const formSubmitHandler = (e) => {
        e.preventDefault()
        const formdata = new FormData(e.target)
        const data = {
            standardRoomCount:formdata.get('standard'),
            deluxeRoomCount:formdata.get('deluxe'),
            suiteRoomCount:formdata.get('suite'),
            noOfNights:formdata.get('nights')
        }
        props.onSubmit(data)
    }


   return (
        <div className={classes.billingCard}>
            <h1 className={classes.h1}>Hotel Room Billing</h1>
            <p className={classes.p}>Enter room booking details</p>

            <form id="calBill" onSubmit={formSubmitHandler}>
                <Input id='standard' type='number' min='0' placeholder="Number of rooms" label='Standard Rooms' />

                <Input id='deluxe' type='number' min='0' placeholder="Number of rooms" label='Deluxe Rooms' />

                <Input id='suite' type='number' min='0' placeholder="Number of rooms" label='Suite Rooms' />

                <Input id='nights' type='number' min='1' placeholder="Number of Nights" label='Number of Nights' />

                <button type="submit">Calculate Bill</button>

            </form>
        </div>
    );
};

export default BookingForm;
