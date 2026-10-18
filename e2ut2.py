print("Introduce un número entero") # El usuario introduce un número entero
num1 = int(input()) # Recogemos el número como entero
if num1 == 0: #Comprobamos el valor del número y mostramos un mensaje con el resultado
    print("El número introducido es cero")
elif num1 < 0:
    print("El número introducido es negativo")
else:
    print("El número introducido es positivo")