export default class MathHelper{

    /**
     * @description Calculates the absolute value of the difference of two values.
     * @param value1 Source value.
     * @param value2 Source value.
     * @returns Distance between the two values.
     */
    public static Distance(value1:number, value2:number):number
    {
        return Math.abs(value1 - value2);
    }

    /**
     * @description Linearly interpolates between two values.
     * @param value1 Source value.
     * @param value2 Source value.
     * @param amount Value between 0 and 1 indicating the weight of value2.
     * @returns Interpolated value.
     */
    public static Lerp(value1:number,value2:number,amount:number):number
    {
        return value1 + (value2 - value1) * amount;
    }

    /**
     * Converts radians to degrees.
     * @param radians The angle in radians.
     * @returns The angle in degrees.
     */
    public static ToDegrees(radians:number):number
    {
        return  <number>(radians * 57.295779513082320876798154814105);
    }

    /**
     * @description Converts degrees to radians.
     * @param degrees The angle in degrees.
     * @returns The angle in radians.
     */
    public static ToRadians(degrees:number):number
    {
        return <number>(degrees * 0.017453292519943295769236907684886);
    }

}