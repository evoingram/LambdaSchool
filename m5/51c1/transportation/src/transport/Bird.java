package transport;

public class Bird extends AbstractAnimals {
    public String name;
    public int year;

    public Bird(String name, int year) {
        this.name = name;
        this.year = year;
    }

    public String getName() {
        return name;
    };

    public void setName(String name) {
        this.name = name;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String move() {
        return " moves by flying.";
    };

    public String breathe() {
        return " breathes with lungs.";
    };

    public String reproduce() {
        return " reproduce via eggs.";
    };

}