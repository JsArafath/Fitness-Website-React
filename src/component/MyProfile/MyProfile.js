import React from 'react';
import './MyProfile.css';

const MyProfile = () => {
    return (
        <div className='My-Profile'>
            <div className='avatar-section'>
                <img className='avatar-update' src="https://scontent.fdac80-1.fna.fbcdn.net/v/t1.6435-9/141934409_1121302924977418_8575214502748117040_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=nZgzUeuendQAX_bkzop&_nc_ht=scontent.fdac80-1.fna&oh=00_AT_n_6sDLoKYEJrjXV5lUjh_6lfkdnrZDkrva0sdZNScJg&oe=635B0A20" alt="" />
                <div className='my-user-info'>
                    <p className='full-name'><strong>Md. Mohaiminul Islam</strong></p>
                    <small>Khilgaon, Dhaka,Bangladesh</small>
                </div>
            </div>

            <div className='another-info'>
                <div>
                    <p><strong>55kg</strong></p>
                    <p>Weight</p>
                </div>
                <div>
                    <p><strong>5.8</strong></p>
                    <p>height</p>
                </div>
                <div>
                    <p><strong>25yrs</strong></p>
                    <p>Old</p>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;