
export class ReuseableCode {

  getRandomNumber(min, max) {
    // Use Math.random() to generate a random decimal between 0 and 1
    // Multiply by the range (max - min + 1) and add min to shift the range
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  generateRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
    return randomString;
  }

  getRandomFirstName() {
    let firstNames = ['Alice', 'Bob', 'Charlie', 'David', 'Emma', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack', 'Katherine', 'Liam', 'Mia', 'Noah', 'Olivia', 'Peyton', 'Quinn', 'Ryan', 'Sophia'];
    let randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    // Remove double quotes from the string
    const firstNameWithoutQuotes = randomFirstName.replace(/"/g, '');
    return firstNameWithoutQuotes
  }

  getRandomLastName() {
    const lastNames = ['Johnson', 'Smith', 'Williams', 'Davis', 'Miller', 'Wilson', 'Moore', 'Anderson', 'Thomas', 'Harris', 'Lee', 'Garcia', 'Martinez', 'Brown', 'Jones', 'Jackson', 'Taylor', 'White', 'Clark', 'Young'];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    // Remove double quotes from the string
    const lastNameWithoutQuotes = randomLastName.replace(/"/g, '');
    return lastNameWithoutQuotes;
  }

  getRandomPhoneNumber() {
    // Generate a random 10-digit number
    const randomDigits = Math.floor(1000000 + Math.random() * 9000000);

    // Format the number as a phone number without the '+'
    const formattedPhoneNumber = `313${randomDigits}`;

    return formattedPhoneNumber;
  }
  getRandomPassword(length) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$&*_-.";
  
    // Combine all character sets
    const allChars = lowercaseChars + uppercaseChars + numbers + specialChars;
  
    // Ensure the password includes at least one character from each set
    let password = [
      lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length)),
      uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length)),
      numbers.charAt(Math.floor(Math.random() * numbers.length)),
      specialChars.charAt(Math.floor(Math.random() * specialChars.length))
    ];
  
    // Fill the rest of the password with random characters from all sets
    for (let i = password.length; i < length; i++) {
      password.push(allChars.charAt(Math.floor(Math.random() * allChars.length)));
    }
  
    // Shuffle the password to avoid predictable patterns
    return password.sort(() => Math.random() - 0.5).join('');
  }
  
 
  
 


}
