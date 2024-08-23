function copyCommandText(command, cardElement) {
    // Create a temporary textarea element to hold the text
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = command;
    
    // Add it to the document so it can be selected
    document.body.appendChild(tempTextArea);
    
    // Select the text
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to the clipboard
    document.execCommand('copy');

    // Remove the temporary textarea element
    document.body.removeChild(tempTextArea);

    // Add the 'clicked' class to provide feedback
    cardElement.classList.add('clicked');

    // Remove the 'clicked' class after a delay to reset the card
    setTimeout(() => {
        cardElement.classList.remove('clicked');
    }, 2000); // Adjust this duration as needed
}