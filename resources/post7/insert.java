// while shelf is equal to 5 (max storage) wait
public synchronized void insert() {
    while (plants == 5) {
        System.out.println("Shelf is full (Waiting...)");
        try {
            //stops the thread executing this method until another thread calls notifyAll
            wait();
        } catch (InterruptedException e) { e.printStackTrace(); }
    }
    // if shelf not maxed allow inserting
    plants++;
    System.out.println("Potters inserted a plant and shelf now has " + plants + " plants");
    //notify the other threads that they can start
    notifyAll();
}