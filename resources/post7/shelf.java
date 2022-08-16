class Shelf {
    //volatile 
    private volatile int plants = 0;

    // while shelf is equal to 5 (max storage) wait
    public synchronized void insert() {
        while (plants == 5) {
            System.out.println("Shelf is full (Waiting...)");
            try {
                wait();
            } catch (InterruptedException e) { e.printStackTrace(); }
        }
        // if shelf not maxed allow inserting
        plants++;
        System.out.println("Potters inserted a plant and shelf now has " + plants + " plants");
        notifyAll();
    }

    // while shelf equal to 0 (is empty) wait
    public synchronized void remove() {
        while (plants == 0) {
            System.out.println("Shelf is empty (Waiting...)");
            try {
                wait();
            } catch (InterruptedException e) { e.printStackTrace(); }
        }
        // if shelf not maxed allow removing
        plants--;
        System.out.println("Potters removed a plant and shelf now has " + plants + " plants");
        notifyAll();
    }
}
