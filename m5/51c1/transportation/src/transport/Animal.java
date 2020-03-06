package transport;

public class Animal extends AbstractAnimals {
    public int id;
    public String name;
    public int year;

    public Auto(String model, int year) {
        maxID++;
        this.id = maxID;
        this.name = name;
        this.year = year;
    }

    public String setAction() {
        return name + " ";
    };

    public String sayAction() {
        return name + " ";
    };

    public void setModel(String model) {
        this.model = model;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getYear() {
        return year;
    }

    @Override
    public String toString() {
        return "Auto{" + "model='" + model + "\'" + ", fuel=" + fuel + ", year=" + year + "}";
    }

}