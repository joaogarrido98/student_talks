class Packer extends Thread {
    private Shelf shelf;
    private int count = 1;

    /**
     * load shelf into variables so we can use later
     * @param sh Shelf object
     */
    public Packer(Shelf sh) {
        this.shelf = sh;
    }

    // method that makes packers pack pots
    public void run() {
        System.out.println("Hagrid has started");
        // while packer doesn't pack 20 pots keep packing them
        while (count <= 20) {
            try {
                System.out.println("Hagrid is ready to pack");
                sleep(400);
            } catch (InterruptedException e) { e.printStackTrace(); }
            // after the "4 minutes" put a pot in the shelf
            shelf.remove();
            System.out.println("Hagrid has packed pot " + count);
            count++;
        }
    }
}