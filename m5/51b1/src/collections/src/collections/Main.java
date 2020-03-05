package collections;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // for array, must give:
        // fixed element type
        // fixed length
        // 0 == first element, 1 = second
        System.out.print("*** ARRAYS ***");
        Dogs dogArray1[];
        dogArray1 = new Dogs[5]; // index 0-4

        Dogs[] dogArray = new Dogs[5];
        dogArray[0] = new Dogs("Springer", 50, false);
        dogArray[4] = new Dogs("Corgi", 35, true);
        dogArray[1] = new Dogs("Bulldog", 50, true);
        dogArray[2] = new Dogs("Collie", 50, false);
        dogArray[3] = new Dogs("Chihuahua", 5, true);
        // dogArray[5] = new Dogs("mutt", 15, true);

        for (int i = 0; i < dogArray.length; i++) {
            System.out.println(dogArray[i]);
        }
        System.out.println("Breed sub 3 good for apartment?" + dogArray[3].isApartment());

        System.out.println("\nprint out arrays\n");
        System.out.println(dogArray.toString());
        System.out.println("--- Second Array Method ---");
        System.out.println(Arrays.toString(dogArray));
        System.out.println();

        // for array list, must give:
        // fixed element type
        // varied length
        // fixed index
        System.out.print("*** ARRAYLIST ***");
        // Object --> Collections --> List --> ArrayList
        // -------------------------> Map
        // -------------------------> Set
        // ----------------------------------> Linked List
        ArrayList<Dogs> dogsArrayList = new ArrayList<Dogs>();
        dogsArrayList.addAll(Arrays.asList(dogArray));

        dogsArrayList.add(new Dogs("Mutt", 15, true));

        for (Dogs dog : dogsArrayList) {
            System.out.println(dog);
        }

        System.out.println();

        for (Dogs dog : dogsArrayList) {
            if (dog.getAvgWeight() >= 50) {
                System.out.println(dog.getBreed() + " are large");
            }
        }
        for (Dogs dog : dogsArrayList) {
            if (dog.getAvgWeight() <= 50) {
                System.out.println(dog.getBreed() + " are small");
            }
        }
        if ('a' == 'b') {
            // nothing
            System.out.println("Equals");
        }
        if (dogsArrayList.get(2).getBreed().equals("Turtle")) {
            System.out.println("Equals");
        } else {
            System.out.println("Not Equals");

        }
        System.out.println();

        dogsArrayList.add(2, new Dogs("Labrador", 75, false));
        dogsArrayList.forEach(dog -> System.out.println(dog));

        dogsArrayList.set(2, new Dogs("Poodle", 50, false));
        dogsArrayList.forEach(dog -> System.out.println(dog));
        System.out.println();
        System.out.println("Size " + dogsArrayList.size());
        System.out.println(dogsArrayList.get(3));
        dogsArrayList.remove(3);
        System.out.println(dogsArrayList.get(3));
        System.out.println();

        // for hashmaps, must give:
        // fixed element type
        // varied length
        // choice in index

        // keys -> reference (index) unique
        // values -> find using key
        //

        System.out.print("*** HASHMAPS ***");
        HashMap<Integer, Dogs> dogsHashMap = new HashMap<Integer, Dogs>();

        int hashcount = 0;

        for (Dogs doggo : dogsArrayList) {
            // put = if key !exist, add to hashmap
            // if key exists, replace hashmap entry
            dogsHashMap.put(hashcount, doggo);
            hashcount++;
        }

        dogsArrayList.clear();
        System.out.println(dogsHashMap.get(3));
        System.out.println(dogsHashMap.size());
        dogsHashMap.remove(3);
        System.out.println(dogsHashMap.get(3));

        for (Integer x : dogsHashMap.keySet()) {
            System.out.println("Key:  " + x + " Value:  " + dogsHashMap.get(x));
        }
        System.out.println();

        // sort HashMap
        ArrayList<HashMap.Entry<Integer, Dogs>> sortedMap = new ArrayList<HashMap.Entry<Integer, Dogs>>();
        sortedMap.addAll(dogsHashMap.entrySet());

        Collections.sort(sortedMap, new Comparator<HashMap.Entry<Integer, Dogs>>() {
            public int compare(HashMap.Entry<Integer, Dogs> o1, HashMap.Entry<Integer, Dogs> o2) {
                // return
                // o1.getValue().getBreed().compareToIgnoreCase(o2.getValue().getBreed());
                return o2.getValue().getAvgWeight() - o1.getValue().getAvgWeight();
            }
        });

        for (Integer y : dogsHashMap.keySet()) {
            System.out.println("Key:  " + y + " Value:  " + dogsHashMap.get(y));
        }
        System.out.println();
    }
}