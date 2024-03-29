//class potters that extends Thread class
class Packer extends Thread {
    //represents the shelf 
    private Shelf shelf;
    private int count = 1;

    /**
     * load shelf into variables so we can use later
     * @param sh Shelf object
     */
    public Packer(Shelf sh) {
        this.shelf = sh;
    }

    // method that makes packers pack plants
    // calls runable of java Thread
    public void run() {
        System.out.println("Hagrid has started");
        // while packer doesn't pack 20 plants keep packing them
        while (count <= 20) {
            try {
                System.out.println("Hagrid is ready to pack");
                //we use sleep 400 to create a sense of time that takes to pack a plant
                sleep(400);
            } catch (InterruptedException e) { e.printStackTrace(); }
            // after the "4 minutes" put a plant in the shelf
            shelf.remove();
            System.out.println("Hagrid has packed plant " + count);
            count++;
        }
    }
}