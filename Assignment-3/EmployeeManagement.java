import java.util.ArrayList;
import java.util.List;

// Employee class with attributes and methods
class Employee {
    private int id;
    private String name;
    private double salary;

    // Constructor to initialize Employee objects
    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Method to display employee details
    public void displayDetails() {
        System.out.println("ID: " + id + ", Name: " + name + ", Salary: INR" + salary);
    }
}

// Main class to test Employee objects
public class EmployeeManagement {
    public static void main(String[] args) {
        // Creating a list to store Employee objects
        List<Employee> employees = new ArrayList<>();

        // Adding Employee objects to the list
        employees.add(new Employee(101, "Hayagreeva", 50000));
        employees.add(new Employee(102, "Vandana", 60000));
        employees.add(new Employee(103, "Siri", 70000));

        // Displaying details of all employees
        System.out.println("Employee Details:");
        for (Employee emp : employees) {
            emp.displayDetails();
        }
    }
}
