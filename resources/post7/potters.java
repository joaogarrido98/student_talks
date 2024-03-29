//class potters that extends Thread class
class Potters extends Thread {
    //represents the shelf
    private Shelf shelf;
    //class properties
    private int rate;
    private String name;
    private int count = 1;

    /**
     * load name/rate/shelf into variables so we can use later
     * @param sh   Shelf object
     * @param time int value for how long it takes to make a plant
     * @param n    String value to assign a name to the potter
     */
    public Potters(Shelf sh, int time, String n) {
        this.rate = time == 5 ? 500 : 600;
        this.shelf = sh;
        this.name = n;
    }

    // method that makes potter make plants
    // calls runable of java Thread
    public void run() {
        System.out.println(name + " has started");
        // while potter doesn't make 10 plants keep making them
        while (count <= 10) {
            try {
                System.out.println(name + " is making a plant");
                //we use sleep to create a sense of time that takes to make a plant
                sleep(rate);
            } catch (InterruptedException e) { e.printStackTrace(); }
            // after the "n minutes" put a plant in the shelf
            shelf.insert();
            System.out.println(name + " has put a plant on the shelf");
            count++;
        }
    }
}