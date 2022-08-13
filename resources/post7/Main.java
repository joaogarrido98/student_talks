// Just a simple class to run and se the magic happening
public class Main {
    // create objects of each potter, shelf and packer
    public static void main(String[] args) {
        Shelf shelf = new Shelf();
        Potters ginny = new Potters(shelf, 5, "Harry");
        Potters harry = new Potters(shelf, 6, "Ginny");
        Packer hagrid = new Packer(shelf);
        // start the potters and packers threads
        ginny.start();
        harry.start();
        hagrid.start();
    }
}
