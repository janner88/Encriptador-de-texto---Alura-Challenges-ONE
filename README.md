Text Encryption/Decryption App


This is a simple web application that allows users to encrypt and decrypt text using a custom code. The code replaces certain letters in the original text with specific phrases, and vice versa for decryption. The application also includes a copy-to-clipboard feature for convenience.


Getting Started


To get started, simply clone or download this repository to your local machine. Once you have the files, you can open the index.html file in your web browser to access the application.


How to use


The application has a simple user interface with a few basic features:


* Text input: Users can enter the text they want to encrypt or decrypt into the text area provided.
* Encryption/decryption buttons: Users can choose to either encrypt or decrypt the text using the buttons provided.
* Copy to clipboard button: Once the text has been encrypted or decrypted, users can click the "Copy to Clipboard" button to copy the resulting text to their clipboard.
* Result display: The resulting text is displayed in the message area below the input area.


To encrypt or decrypt text, simply enter the desired text into the input area and click the appropriate button. The resulting text will be displayed in the message area below the input area. Users can then click the "Copy to Clipboard" button to copy the resulting text to their clipboard.


Code Documentation


The code for this application is written in JavaScript and uses the following libraries and frameworks:


* SweetAlert2: A JavaScript library for creating beautiful and customizable alert dialogs.


The code is separated into several functions for easy readability and organization:


* "validarTexto()": This function checks whether the input text contains only lowercase letters without accents. If the input is invalid, it displays an error message and reloads the page.
* "botonEncriptar()": This function encrypts the input text and displays the result in the message area. It also clears the input area and displays the "Copy to Clipboard" button.
* "botonDesencriptar()": This function decrypts the input text and displays the result in the message area. It also clears the input area and displays the "Copy to Clipboard" button.
* "botonCopiar()": This function copies the resulting text to the user's clipboard and displays a success message.
* "copiaResultado()": This function selects the resulting text and copies it to the user's clipboard.
* "encriptar()": This function takes in a string and replaces certain letters with specific phrases according to the custom encryption code.
* "desencriptar()": This function takes in a string and replaces specific phrases with certain letters according to the custom encryption code.


Substitution rules


The following letters are replaced with the corresponding characters:


* "e"  is replaced with  "enter"
* "i"   is replaced with  "imes"
* "a"  is replaced with  "ai"
* "o"  is replaced with  "ober"
* "u"  is replaced with  "ufat"


Technologies used

This program was developed using HTML, CSS and JavaScript.



Credits

Developed by Jose Janer Barbosa Leon.


—-----------------------------------------------------------------------------------


Aplicación de encripción/desencripción de texto


Esta es una aplicación web simple que permite a los usuarios cifrar y descifrar texto utilizando un código personalizado. El código reemplaza ciertas letras en el texto original con frases específicas y viceversa para el descifrado. La aplicación también incluye una función de copia al portapapeles para mayor comodidad.


Empezando


Para comenzar, simplemente clone o descargue este repositorio en su máquina local. Una vez que tenga los archivos, puede abrir el archivo index.html en su navegador web para acceder a la aplicación.


Cómo usarlo


La aplicación tiene una interfaz de usuario simple con algunas características básicas:


* Entrada de texto: Los usuarios pueden ingresar el texto que desean cifrar o descifrar en el área de texto proporcionada.
* Botones de encriptado/desencriptado: Los usuarios pueden optar por cifrar o descifrar el texto mediante los botones proporcionados.
* Botón Copiar al portapapeles: Una vez que el texto se ha cifrado o descifrado, los usuarios pueden hacer clic en el botón "Copiar al portapapeles" para copiar el texto resultante en su portapapeles.
* Visualización de resultados: El texto resultante se muestra en el área de mensajes debajo del área de entrada.


Para cifrar o descifrar texto, simplemente ingrese el texto deseado en el área de entrada y haga clic en el botón correspondiente. El texto resultante se mostrará en el área de mensajes debajo del área de entrada. Luego, los usuarios pueden hacer clic en el botón "Copiar al portapapeles" para copiar el texto resultante en su portapapeles.


Documentación del código


El código de esta aplicación está escrito en JavaScript y utiliza las siguientes bibliotecas y marcos:


* SweetAlert2: Una biblioteca de JavaScript para crear diálogos de alerta personalizables.


El código está separado en varias funciones para una fácil lectura y organización:


* "validarTexto()": Esta función verifica si el texto de entrada contiene solo letras minúsculas sin acentos. Si la entrada no es válida, muestra un mensaje de error y vuelve a cargar la página.
* "botonEncriptar()": Esta función cifra el texto de entrada y muestra el resultado en el área de mensajes. También borra el área de entrada y muestra el botón "Copiar al portapapeles".
* "botonDesencriptar()": Esta función descifra el texto de entrada y muestra el resultado en el área de mensajes. También borra el área de entrada y muestra el botón "Copiar al portapapeles".
* "botonCopiar()": Esta función copia el texto resultante en el portapapeles del usuario y muestra un mensaje de éxito.
* "copiaResultado()": Esta función selecciona el texto resultante y lo copia en el portapapeles del usuario.
* "encriptar()": Esta función toma una cadena y reemplaza ciertas letras con frases específicas de acuerdo con el código de cifrado personalizado.
* "desencriptar()": Esta función toma una cadena y reemplaza frases específicas con ciertas letras según el código de cifrado personalizado.


Reglas de sustitución


Las siguientes letras se sustituyen por los caracteres correspondientes:


* "e"  se reemplaza con  "enter"
* "i"   se reemplaza con  "imes"
* "a"  se reemplaza con  "ai"
* "o"  se reemplaza con  "ober"
* "u"  se reemplaza con  "ufat"


Tecnologías utilizadas

Este programa fue desarrollado utilizando HTML, CSS y JavaScript.


Créditos

Desarrollado por Jose Janer Barbosa Leon.