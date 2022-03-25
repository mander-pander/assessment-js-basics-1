const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Welcome the user to the password validator tool
// Prompt the user for a password to validate
// Check if the user’s password meets the following constraint:
// At least 10 characters long
// If the user’s password meets the constraint, show a success message to the user
// If the user’s password fails the constraint, show a failure message to the user



// ----------------- basic solution ----------

reader.question("Welcome to the password validator tool! Please enter your password.", function(input) {
    let characters = input.split('');
    let pwdLength = input.length;

    if (pwdLength >= 10) {
        console.log('Success! Password sufficient.')
    } else if(pwdLength < 10) {
        console.log('Failed! Please update your password to have at least 10 characters.')
    }
    reader.close();
});

//--------- bonus attempt below ----------------
// --------------- added username so password cannot be same and no two characters in a row-----------------


// reader.question("Welcome to the password validator tool! Please enter your username.", function(username) {
//     let usernameParam = username;
//     reader.question('Please enter your password', function(password){
//         let passwordParam = password;
//         let characters = password.split('');
//         let pwdLength = password.length;

//         for (let i = 0; i < characters.length; i++) {
//             if(characters[i] === characters[i+1]) {
//                 console.log(`Please avoid using two of the same characters in a row.`);
//                 break;
//             }
//         }
//         if(passwordParam === usernameParam) {
//             console.log(`Password cannot be same as username. Please make a more secure password.

//             ▄▄▄▄▄▄▄▄   ▄· ▄▌     ▄▄▄·  ▄▄ •  ▄▄▄· ▪   ▐ ▄ ▄▄
//             •██  ▀▄ █·▐█▪██▌    ▐█ ▀█ ▐█ ▀ ▪▐█ ▀█ ██ •█▌▐███▌
//             ▐█.▪▐▀▀▄ ▐█▌▐█▪    ▄█▀▀█ ▄█ ▀█▄▄█▀▀█ ▐█·▐█▐▐▌▐█·
//             ▐█▌·▐█•█▌ ▐█▀·.    ▐█ ▪▐▌▐█▄▪▐█▐█ ▪▐▌▐█▌██▐█▌.▀
//             ▀▀▀ .▀  ▀  ▀ •      ▀  ▀ ·▀▀▀▀  ▀  ▀ ▀▀▀▀▀ █▪ ▀

//             `);
//         } else if (password === 'password') {
//             console.log('Password cannot be the word password.')
//         } else if(pwdLength < 10) {
//             console.log('Failed! Please update your password to have at least 10 characters.')
//         } else if (pwdLength >= 10) {
//             console.log(`Success! Password sufficient.

//             #     #               ###                                                                                    ###
//             #   #   ####  #    # ### #####  ######     ####  #    # #####  ###### #####      ####    ##   ###### ###### ###
//             # #   #    # #    #  #  #    # #         #      #    # #    # #      #    #    #       #  #  #      #      ###
//             #    #    # #    # #   #    # #####      ####  #    # #    # #####  #    #     ####  #    # #####  #####   #
//             #    #    # #    #     #####  #              # #    # #####  #      #####          # ###### #      #
//             #    #    # #    #     #   #  #         #    # #    # #      #      #   #     #    # #    # #      #      ###
//             #     ####   ####      #    # ######     ####   ####  #      ###### #    #     ####  #    # #      ###### ###
//             `);
//         }
//         reader.close();
//     });
// });
