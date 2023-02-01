import java.util.Scanner;

public class calcolo {
  public static void main(String[] args) {
    //crea un programma per la creazione di chiave pubblica e privata rsa

    //crea un oggetto scanner
    Scanner input = new Scanner(System.in);

    System.out.printf("Inserisci p:");
    int p = input.nextInt();

    System.out.printf("Inserisci q:");
    int q = input.nextInt();

    int n = p * q;

    int phi = (p - 1) * (q - 1);

    System.out.printf("Inserisci e:");
    int e = input.nextInt();

    int d = 0;

    for (int i = 1; i < phi; i++) {
      if ((e * i) % phi == 1) {
        d = i;
        break;
      }
    }

    System.out.println("Chiave pubblica: (" + e + ", " + n + ")");
    System.out.println("Chiave privata: (" + d + ", " + n + ")");

    //cripta un messaggio
    System.out.printf("Inserisci il messaggio da criptare:");
    int m = input.nextInt();

    int c = 1;
    for (int i = 0; i < e; i++) {
      c = (c * m) % n;
    }

    System.out.println("Il messaggio criptato è: " + c);

    int m2 = 1;
    for (int i = 0; i < d; i++) {
      m2 = (m2 * c) % n;
    }

    System.out.println("Il messaggio decriptato è: " + m2);

  }
}