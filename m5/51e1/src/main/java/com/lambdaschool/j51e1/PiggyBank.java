package com.lambdaschool.j51e1;

import java.util.concurrent.atomic.AtomicLong;
import java.text.DecimalFormat;

public class PiggyBank {
    private static final AtomicLong counter = new AtomicLong();
    private long id;
    private double pbTotal;
    private double dollar;
    private double quarter;
    private double dime;
    private double nickel;
    private double penny;
    private int totalCoinsToAdd;

    public PiggyBank(decimal pbTotal){
        this.id = counter.incrementAndGet();
        this.pbTotal = pbTotal;
        String pattern="###,###.00";
        DecimalFormat dFormat=new DecimalFormat(pattern);
        this.dollar = toDecimal(dFormat.format(1.0));
        this.quarter = toDecimal(dFormat.format(0.25));
        this.dime = toDecimal(dFormat.format(0.10));
        this.nickel = toDecimal(dFormat.format(0.05));
        this.penny = toDecimal(dFormat.format(0.01));
    }

    public PiggyBank(double pbTotal, double dollar = toDecimal(dFormat.format(1.0)), double quarter = toDecimal(dFormat.format(0.25)), double dime = toDecimal(dFormat.format(0.10)), double nickel = toDecimal(dFormat.format(0.05)), double penny = toDecimal(dFormat.format(0.01)), int totalCoinsToAdd = 0) {

        this.id = counter.incrementAndGet();
        this.pbTotal = pbTotal;
        this.dollar = dollar;
        this.quarter = quarter;
        this.dime = dime;
        this.nickel = nickel;
        this.penny = penny;
        this.totalCoinsToAdd = totalCoinsToAdd;
    }

    public PiggyBank(double pbTotal,
                     double dollar,
                     double quarter,
                     double dime,
                     double nickel,
                     double penny,
                     int totalCoinsToAdd,
                     double dollarAmount,
                     double quarterAmount,
                     double dimeAmount,
                     double nickelAmount,
                     double pennyAmount) {
        this.pbTotal = pbTotal;
        this.dollar = dollar;
        this.quarter = quarter;
        this.dime = dime;
        this.nickel = nickel;
        this.penny = penny;
        this.totalCoinsToAdd = totalCoinsToAdd;
        this.dollarAmount = dollarAmount;
        this.quarterAmount = quarterAmount;
        this.dimeAmount = dimeAmount;
        this.nickelAmount = nickelAmount;
        this.pennyAmount = pennyAmount;
    }

    public PiggyBank(double pbTotal,
                     double dollar,
                     double quarter,
                     double dime,
                     double nickel,
                     double penny) {
        this(pbTotal,
                dollar,
                quarter,
                dime,
                nickel,
                penny,
                0,
                1.0,
                0.25,
                0.10,
                0.05,
                0.01);
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public double getPbTotal() {
        return pbTotal;
    }

    public void setPbTotal(double pbTotal) {
        this.pbTotal = pbTotal;
    }

    public double getDollar() {
        return dollar;
    }

    public void setDollar(double dollar) {
        this.dollar = dollar;
    }

    public double getQuarter() {
        return quarter;
    }

    public void setQuarter(double quarter) {
        this.quarter = quarter;
    }

    public double getDime() {
        return dime;
    }

    public void setDime(double dime) {
        this.dime = dime;
    }

    public double getNickel() {
        return nickel;
    }

    public void setNickel(double nickel) {
        this.nickel = nickel;
    }

    public double getPenny() {
        return penny;
    }

    public void setPenny(double penny) {
        this.penny = penny;
    }

    public int getTotalCoinsToAdd() {
        return totalCoinsToAdd;
    }

    public void setTotalCoinsToAdd(int totalCoinsToAdd) {
        this.totalCoinsToAdd = totalCoinsToAdd;
    }

    @Override
    public String toString() {
        return "PiggyBank{" +
                "id=" + id +
                ", pbTotal=" + pbTotal +
                ", dollar=" + dollar +
                ", quarter=" + quarter +
                ", dime=" + dime +
                ", nickel=" + nickel +
                ", penny=" + penny +
                ", totalCoinsToAdd=" + totalCoinsToAdd +
                ", quarter=" + quarter +
                ", dime=" + dime +
                ", nickel=" + nickel +
                ", penny=" + penny +
                ", totalCoinsToAdd=" + totalCoinsToAdd +
                '}';
    }
}
