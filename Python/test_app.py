"""
Testing the sorting algorithm
"""

import unittest

from app import get_precision, get_min_max_log


class TestGetPrecision(unittest.TestCase):
    """
    Testing the get_precision function
    """

    def test_get_precision(self):
        """
        Testing the get_precision function
        """

        self.assertEqual(get_precision(0), 0)
        self.assertEqual(get_precision(-1), 0)
        self.assertEqual(get_precision(1), 0)
        self.assertEqual(get_precision(1000), 3)
        self.assertEqual(get_precision(-1000), 3)
        self.assertEqual(get_precision(1.43), -2)
        self.assertEqual(get_precision(-1.43), -2)


class TestGetMinMaxLog(unittest.TestCase):
    """
    Testing the get_min_max_log function
    """

    def test_get_min_max_log(self):
        """
        Testing the get_min_max_log function
        """

        self.assertEqual(get_min_max_log([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), (0, 9, 0))
        self.assertEqual(
            get_min_max_log([0, -1, -2, -3, -4, -5, -6, -7, -8, -9]), (-9, 0, 0)
        )
        self.assertEqual(get_min_max_log([0, 0, 0, 0, 0, 0, 0, 0]), (0, 0, 0))
        self.assertEqual(
            get_min_max_log([0, 100, 2, 3, 4, 500, 6, 7, 800, 9]), (0, 800, 0)
        )
        self.assertEqual(
            get_min_max_log([0, -100, -2, -3, -4, -500, -6, -7, -800, -9]),
            (
                -800,
                0,
                0,
            ),
        )
        print(get_min_max_log([0, 100, 200, 300, 400, 500, 600, 700, 800, 900]))
        self.assertEqual(
            get_min_max_log([0, 100, 200, 300, 400, 500, 600, 700, 800, 900]),
            (0, 900, 2),
        )
        self.assertEqual(
            get_min_max_log([0, -100, -200, -300, -400, -500, -600, -700, -800, -900]),
            (-900, 0, 2),
        )
        self.assertEqual(get_min_max_log([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1), (0, 9, 0))
        self.assertEqual(get_min_max_log([0, 0, 0.1, 0.2, 0.9], 0.1), (0, 0.9, 0))


if __name__ == "__main__":
    unittest.main()
