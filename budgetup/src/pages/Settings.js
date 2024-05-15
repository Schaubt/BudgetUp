import React from 'react';
import NavBar from '../components/navBar';

function Settings() {
    const handleAccountRemoval = () => {
        const confirmDeletion = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");
        if (confirmDeletion) {
            // Add code here to handle account removal
            // ...
            alert("Account removed.");
        }
    };
    const handlePasswordReset = () => {
        let confirmReset = window.confirm("Are you sure you want to reset your password?");
        if (confirmReset) {
            let newPassword = prompt("Please enter your new password:");
            if (newPassword) {
                // Add code here to handle password reset
                // ...
                while(newPassword.length < 8){
                    newPassword = prompt("Password must be at least 8 characters long. Please enter your new password:");
                }
                alert("Password reset successful.");
            }
        }
    };

    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
               <NavBar />
               Settings
                <button className="flex gap-0 items-start px-5 mt-10 rounded-3xl bg-zinc-300 max-md:flex-wrap" onClick={handleAccountRemoval}>
                    <span className="material-symbols-outlined pt-2">person_remove</span>
                    <div className="flex-auto my-auto">Remove Account</div>
                </button>
                <button className="flex gap-1.5 px-5 py-0.5 mt-7 rounded-3xl bg-zinc-300 max-md:flex-wrap" onClick={handlePasswordReset}>
                    <span className="material-symbols-outlined pt-2">lock_reset</span>
                    <div className="flex-auto my-auto">Password Change</div>
                </button>
            
        </>
    );
}

export default Settings;