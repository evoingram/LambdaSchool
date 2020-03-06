package transport;

import java.util.*;

public class Main {

    public static ArrayList<AbstractAnimals> filteredList = new ArrayList<AbstractAnimals>();

    /*
     * public static void printVehicles(ArrayList<AbstractVehicle> vehicles,
     * CheckVehicle tester) { filteredList.clear(); for (AbstractVehicle v :
     * vehicles) { if (tester.test(v)) { System.out.println(v.getName() + " " +
     * v.getFuelLevel()); filteredList.add(v); } } }
     */
    public static void main(String[] args) {
        /*
         * Horse seabiscuit = new Horse("Seabiscuit"); Horse affirmed = new
         * Horse("Affirmed"); Horse joe = new Horse("Joe");
         * 
         * seabiscuit.eat(10); affirmed.eat(5); for (int i = 0; i < 3; i++) {
         * seabiscuit.move(); } System.out.println("Seabiscuit's fuel = " +
         * seabiscuit.getFuelLevel());
         * 
         * System.out.println("\n***FROM ABSTRACT CLASS***");
         * 
         * HorseFromVehicle secretariat = new HorseFromVehicle("Secretariat", 10);
         * 
         * secretariat.addFuel(10); System.out.println("Secretariat fuel = " +
         * secretariat.getFuelLevel());
         * 
         * HorseFromVehicle eclipse = new HorseFromVehicle("Eclipse");
         * System.out.println("Eclipse fuel = " + eclipse.getFuelLevel());
         * 
         * Auto vw = new Auto(1, "Eurovan", 2000); Auto toyota = new Auto(10, "Tundra",
         * 1998); Auto honda = new Auto(5, "Accord", 2003); vw.move(); vw.move(5);
         * toyota.move(20);
         * 
         * HorseFromVehicle trigger = new HorseFromVehicle("Trigger", 10);
         * HorseFromVehicle seattleSlew = new HorseFromVehicle("Seattle Slew", 10);
         * HorseFromVehicle americanPharoah = new HorseFromVehicle("American Pharoah",
         * 10);
         * 
         * ArrayList<AbstractVehicle> myList = new ArrayList<AbstractVehicle>();
         * 
         * myList.add(secretariat); myList.add(trigger); myList.add(seattleSlew);
         * myList.add(americanPharoah); myList.add(eclipse); myList.add(vw);
         * myList.add(toyota); myList.add(honda); System.out.println();
         * System.out.println("*** This List ***");
         * System.out.println(myList.toString());
         * 
         * System.out.println();
         * System.out.println("*** Horses with Negative Fuel ***");
         * printVehicles(myList, v -> v.getFuelLevel() < 1); System.out.println();
         * System.out.println("\n*** Horses with Positive Fuel ***");
         * printVehicles(myList, v -> v.getFuelLevel() > 0 && (v instanceof
         * HorseFromVehicle));
         * 
         * // System.out.println(); // filteredList.sort()
         * 
         * System.out.println(); // sort
         * System.out.println("\n*** Sorted Vehicles ***"); myList.sort((v1, v2) ->
         * v1.getName().compareToIgnoreCase(v2.getName())); myList.forEach((v) ->
         * System.out.println(v.getName())); System.out.println();
         */

        ArrayList<AbstractAnimals> animalList = new ArrayList<AbstractAnimals>();

        // collection 1
        System.out.println("\n*** Mammals ***\n");
        System.out.println();
        AbstractAnimals panda = new Mammal("Panda", 1869);
        AbstractAnimals zebra = new Mammal("Zebra", 1778);
        AbstractAnimals koala = new Mammal("Koala", 1816);
        AbstractAnimals sloth = new Mammal("Sloth", 1804);
        AbstractAnimals armadillo = new Mammal("Armadillo", 1758);
        AbstractAnimals raccoon = new Mammal("Raccoon", 1758);
        AbstractAnimals bigfoot = new Mammal("Bigfoot", 2021);
        animalList.add(panda);
        animalList.add(zebra);
        animalList.add(koala);
        animalList.add(sloth);
        animalList.add(armadillo);
        animalList.add(raccoon);
        animalList.add(bigfoot);
        System.out.println();

        // collection 2
        System.out.println("\n*** Birds ***\n");

        System.out.println();
        AbstractAnimals pigeon = new Bird("Pigeon", 1837);
        AbstractAnimals peacock = new Bird("Peacock", 1821);
        AbstractAnimals toucan = new Bird("Toucan", 1758);
        AbstractAnimals parrot = new Bird("Parrot", 1824);
        AbstractAnimals swan = new Bird("Swan", 1758);
        animalList.add(peacock);
        animalList.add(pigeon);
        animalList.add(toucan);
        animalList.add(parrot);
        animalList.add(swan);
        System.out.println();

        // collection 3
        System.out.println("\n*** Fish ***\n");
        System.out.println();
        AbstractAnimals salmon = new Fish("Salmon", 1758);
        AbstractAnimals catfish = new Fish("Catfish", 1817);
        AbstractAnimals perch = new Fish("Perch", 1758);
        animalList.add(salmon);
        animalList.add(catfish);
        animalList.add(perch);
        System.out.println();
        System.out.println("\n*** Animal List ***\n");
        System.out.println(animalList.toString());

        System.out.println("\n*** animals in descending order by year named ***\n");
        animalList.sort((v1, v2) -> v1.getName().compareToIgnoreCase(v2.getName()));
        System.out.println();

        System.out.println("\n*** animals alphabetically ***\n");
        animalList.sort((v1, v2) -> v1.getName().compareToIgnoreCase(v2.getName()));
        System.out.println();

        System.out.println("\n*** animals order by how they move ***\n");
        animalList.sort((v1, v2) -> v1.getName().compareToIgnoreCase(v2.getName()));
        System.out.println();

        System.out.println("\n*** animals the breath with lungs ***\n");
        animalList.sort((v1, v2) -> v1.getName().compareToIgnoreCase(v2.getName()));
        System.out.println();

        System.out.println("\n*** animals that breath with lungs and were named in 1758 ***\n");
        animalList.sort((v1, v2) -> v1.getName().compareToIgnoreCase(v2.getName()));
        System.out.println();

        System.out.println("\n*** animals that lay eggs and breath with lungs ***\n");
        animalList.sort((v1, v2) -> v1.getName().compareToIgnoreCase(v2.getName()));
        System.out.println();

        System.out.println("\n*** animals that were named in 1758 ***\n");
        animalList.sort((v1, v2) -> v1.getName().compareToIgnoreCase(v2.getName()));
        System.out.println();

        System.out.println("\n*** animals that are mammals ***\n");
        animalList.sort((v1, v2) -> v1.getName().compareToIgnoreCase(v2.getName()));
        System.out.println();
    }
}
