// while shelf equal to 0 (is empty) wait
public synchronized void remove() {
    while (plants == 0) {
        System.out.println("Shelf is empty (Waiting...)");
        try {
            //stops the thread executing this method until another thread calls notifyAll
            wait();
        } catch (InterruptedException e) { e.printStackTrace(); }
    }
    // if shelf not maxed allow removing
    plants--;
    System.out.println("Potters removed a plant and shelf now has " + plants + " plants");
    //notify the other threads that they can start
    notifyAll();
}