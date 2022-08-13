class Shelf {
    private volatile int pots = 0;

    // while shelf is equal to 5 (max storage) wait
    public synchronized void insert() {
        while (pots == 5) {
            System.out.println("Shelf is full (Waiting...)");
            try {
                wait();
            } catch (InterruptedException e) { e.printStackTrace(); }
        }
        // if shelf not maxed allow inserting
        pots++;
        System.out.println("Potters inserted a pot and shelf now has " + pots + " pots");
        notifyAll();
    }

    // while shelf equal to 0 (is empty) wait
    public synchronized void remove() {
        while (pots == 0) {
            System.out.println("Shelf is empty (Waiting...)");
            try {
                wait();
            } catch (InterruptedException e) { e.printStackTrace(); }
        }
        // if shelf not maxed allow removing
        pots--;
        System.out.println("Potters removed a pot and shelf now has " + pots + " pots");
        notifyAll();
    }
}
